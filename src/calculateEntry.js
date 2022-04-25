const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const addVisits = {
    adult: 0,
    child: 0,
    senior: 0,
  };
  entrants.forEach((visit) => {
    if (visit.age < 18) {
      addVisits.child += 1;
    } else if (visit.age >= 18 && visit.age < 50) {
      addVisits.adult += 1;
    } else if (visit.age >= 50) {
      addVisits.senior += 1;
    }
  });
  return addVisits;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };
