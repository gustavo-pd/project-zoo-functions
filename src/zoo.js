const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const mustBeIncluded = (id, index) => {
    return id.id === ids[index];
  };

  const filteredSpecies = species.filter(mustBeIncluded);
  return filteredSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((specie) => {
    return animal === specie.name;
  });
  const getAge = getAnimal.residents.every((ages) => {
    return age <= ages.age;
  });
  return getAge;
}

function getEmployeeByName(employeeName) {
  const getEmployee = employees.find((name) => {
    return name.firstName === employeeName || name.lastName === employeeName;
  });
  if (employeeName === undefined) return {};
  return getEmployee;
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

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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
