const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const isManagerTrueOrFalse = employees
    .some((manager) => manager.managers
      .find((manId) => manId === id));
  return isManagerTrueOrFalse;
}

function getRelatedEmployees(managerId) {
  const manageOf = employees
    .filter((man) => man.managers
      .find((gerente) => gerente === managerId));
  if (isManager(managerId)) {
    return manageOf.map((employeesList) => `${employeesList.firstName} ${employeesList.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
