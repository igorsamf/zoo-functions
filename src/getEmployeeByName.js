const data = require('../data/zoo_data');

// ### 3. Implemente a função `getEmployeeByName`

// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

// **O que será avaliado**

// - Sem parâmetros, retorna um objeto vazio
// - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// - Quando provido o último nome do funcionário, retorna o objeto do funcionário


const {employees} = data
function getEmployeeByName(employeeName) {

const findName = employees
  .find((employee) => employee.lastName === employeeName || employee.firstName === employeeName ); 
if (!employeeName) {
 return {};
}
return findName;

}
console.log(getEmployeeByName());

module.exports = getEmployeeByName;


// employeeName.includes(employee.firstName) || employeeName.includes(employee.lastName));