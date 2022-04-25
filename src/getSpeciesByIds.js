const data = require('../data/zoo_data');

// ### 1. Implemente a função `getSpeciesByIds`

// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

// **Observações técnicas**

// - O parâmetro desta função pode ser alterado para atender ao requisito proposto.

// **O que será avaliado**

// - Caso receba nenhum parâmetro, necessário retornar um array vazio;
// - Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
// - Ao receber mais de um id, retorna um array com as espécies referentes aos ids.

// ---

const { species } = data;

function getSpeciesByIds(...ids) {
  const filterAnimals = species.filter((specie) => ids.includes(specie.id));
  return filterAnimals;
}

console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

module.exports = getSpeciesByIds;
