const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  if (animal.sex) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.filter((animalSex) => animalSex.sex === animal.sex).length;
      return acc;
    }, {})[animal.specie];
  }
  if (animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {})[animal.specie];
  }
}
console.log(countAnimals({ specie: 'lions', sex: 'male' }));

module.exports = countAnimals;
