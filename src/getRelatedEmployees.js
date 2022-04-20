const data = require('../data/zoo_data');

const {employees} = data;
// ### 4. Implemente a função `getRelatedEmployees`

// Considerando a boa prática de dividir o código em partes menores, apresentamos a função `getRelatedEmployees` em que você deverá dividí-la em duas funções: 
  
// 1 - `isManager` - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: `true` ou `false`;

// 2 - `getRelatedEmployees` - que utiliza a primeira função para apresentar as seguintes saídas: 
//   * se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
//   * se **não** for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"O id inserido não é de uma pessoa colaboradora gerente!"**.

function isManager(id) {
const isManagerTrueOrFalse = employees
  .some((manager) => manager.managers
    .find((manId) => manId === id ));
    return isManagerTrueOrFalse;
}

function getRelatedEmployees(managerId) {
  const managerOf = employees
  .filter((man) => man.managers
    .find((gerente) => gerente === managerId));
    if(isManager(managerId)) {
     return managerOf.map((employeesList) => `${employeesList.firstName} ${employeesList.lastName}`);
    } 
    throw new Error("O id inserido não é de uma pessoa colaboradora gerente!");
}
console.log(isManager("9e7d4524-363c-416a-8759-8aa7e50c0992"));
console.log(getRelatedEmployees("9e7d4524-363c-416a-8759-8aa7e50c0992"));

module.exports = { isManager, getRelatedEmployees };
