const data = require('../data/zoo_data');

const { species, employees } = data;

// ### 9. Implemente a função `getOldestFromFirstSpecies`

// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

// **O que será avaliado**

// - Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

// ---

function getOldestFromFirstSpecies(id) {
  const getFirstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const getSpecie = species.find((specie) => getFirstSpecie === specie.id).residents;
  const higherAge = getSpecie.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);
  return Object.values(higherAge);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
