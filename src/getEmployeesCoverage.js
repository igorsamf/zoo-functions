const data = require('../data/zoo_data');

const { employees, species } = data;

function findEmployee(obj) {
  return employees
    .find((emp) => (emp.id === obj.id || emp.firstName === obj.name || emp.lastName === obj.name));
}

function findSpecies(obj) {
  const employeeResponsibleFor = findEmployee(obj).responsibleFor;
  return species.filter((specie) => employeeResponsibleFor.includes(specie.id));
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return employees.map((employee) => (
      {
        id: employee.id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        species: findSpecies(employee).map((specie) => specie.name),
        locations: findSpecies(employee).map((specie) => specie.location),
      }));
  }
  if (!findEmployee(obj)) throw new Error('Informações inválidas');
  const { id, firstName, lastName } = findEmployee(obj);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: findSpecies(obj).map((specie) => specie.name),
    locations: findSpecies(obj).map((specie) => specie.location),
  };
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
