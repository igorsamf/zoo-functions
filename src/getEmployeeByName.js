const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const findName = employees
    .find((employee) => employee.lastName === employeeName || employee.firstName === employeeName);
  if (!employeeName) {
    return {};
  }
  return findName;
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
