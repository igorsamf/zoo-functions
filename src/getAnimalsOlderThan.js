const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalsTrue = species.find((specie) => animal.includes(specie.name));
  const ageTrue = animalsTrue.residents.every((resident) => resident.age > age);
  return ageTrue;
}

console.log(getAnimalsOlderThan('otters', 12));

module.exports = getAnimalsOlderThan;
