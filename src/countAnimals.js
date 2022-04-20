const data = require('../data/zoo_data');


// ### 5. Implemente a função `countAnimals`

//   Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

// **Observações técnicas**

//   - Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
//   - Com o argumento `{ specie: 'penguins' }`, retorna um número, a quantidade de pinguins no zoológico;
//   - Com o argumento `{ specie: 'giraffes', sex: 'female' }`, retorna um número, a quantidade de girafas do sexo feminino.

// **O que será avaliado**

//   - Sem parâmetros, retorna as espécies e sua quantidade;
//   - Recebendo como parâmetro um objeto com a chave `specie`, retorna um número, a quantidade de animais daquela espécie;
//   - Recebendo como parâmetro um objeto com a chave `specie` e `sex`, retorna um número, a quantidade de animais daquela espécie, no sexo selecionado.

const {species} = data;

function countAnimals(animal) {

if (!animal) {
    return species.reduce((acc, curr) => {
acc[curr.name] = curr.residents.length;
return acc;
}, {});
}  
else if (animal.sex) {
   return species.reduce((acc, curr) => {
        acc[curr.name] = curr.residents
            .filter((animalSex) => animalSex.sex === animal.sex).length;
        return acc;   
    }, {})[animal.specie];
}
else if (animal) {
    return species.reduce((acc, curr) => {
        acc[curr.name] = curr.residents.length;
        return acc;
    }, {})[animal.specie];
}
}
console.log(countAnimals({ specie: 'lions', sex: 'male' }));

module.exports = countAnimals;