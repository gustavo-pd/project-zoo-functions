const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const mustBeIncluded = (id, index) => id.id === ids[index];
  const filteredSpecies = species.filter(mustBeIncluded);
  return filteredSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((specie) => animal === specie.name);
  const getAge = getAnimal.residents.every((ages) => age <= ages.age);
  return getAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((na) => (na.firstName === employeeName || na.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const employee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return employee;
}

function isManager(id) {
  const condicao = ((valor) => valor.managers.includes(id));
  return employees.some(condicao);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(speciesS = '') {
  if (speciesS.length > 0) {
    return species.find((specie) => specie.name === speciesS).residents.length;
  }
  const bixarada = {};
  species.forEach((specie) => {
    bixarada[specie.name] = specie.residents.length;
  });
  return bixarada;
}

function calculateEntry(entrants = 0) {
  const {
    Adult = 0,
    Senior = 0,
    Child = 0,
  } = entrants;
  const valorAdulto = Adult * prices.Adult;
  const valorSenior = Senior * prices.Senior;
  const valorCrianca = Child * prices.Child;
  return valorAdulto + valorCrianca + valorSenior;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const consult = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return consult;
  }
  return { [dayName]: consult[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const esp = employees.find((employee) => employee.id === id).responsibleFor[0];
  const old = species.find((specie) => specie.id === esp).residents.sort((a, b) => b.age - a.age);
  return Object.values(old[0]);
}

function increasePrices(percentage) {
  prices.Adult = Math.round(((percentage * 0.01 + 1) * prices.Adult) * 100) / 100;
  prices.Senior = Math.round(((percentage * 0.01 + 1) * prices.Senior) * 100) / 100;
  prices.Child = Math.round(((percentage * 0.01 + 1) * prices.Child) * 100) / 100;
  return prices;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
