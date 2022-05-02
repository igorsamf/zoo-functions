const { species } = require('../data/zoo_data');

function getAnimalByLocation(obj) {
  return species
    .reduce((acc, { location, name }) => {
      if (location === 'NE') acc.NE.push(`${name}`);
      if (location === 'NW') acc.NW.push(`${name}`);
      if (location === 'SE') acc.SE.push(`${name}`);
      if (location === 'SW') acc.SW.push(`${name}`);
      return acc;
    }, { NE: [], NW: [], SE: [], SW: [] });
}
function getAnimalTrue(obj) {
  return species.reduce((acc, specie) => {
    const { name, location } = specie;
    if (location === 'NE') {
      acc.NE.push({ [name]: specie.residents.map((resident) => resident.name) });
    } if (location === 'NW') {
      acc.NW.push({ [name]: specie.residents.map((resident) => resident.name) });
    } if (location === 'SE') {
      acc.SE.push({ [name]: specie.residents.map((resident) => resident.name) });
    } if (location === 'SW') {
      acc.SW.push({ [name]: specie.residents.map((resident) => resident.name) });
    }
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function getAnimalSort(obj) {
  return species.reduce((acc, specie) => {
    const { name, location } = specie;
    if (location === 'NE') {
      acc.NE.push({ [name]: specie.residents.map((resident) => resident.name).sort() });
    } if (location === 'NW') {
      acc.NW.push({ [name]: specie.residents.map((resident) => resident.name).sort() });
    } if (location === 'SE') {
      acc.SE.push({ [name]: specie.residents.map((resident) => resident.name).sort() });
    } if (location === 'SW') {
      acc.SW.push({ [name]: specie.residents.map((resident) => resident.name).sort() });
    }
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function getAnimalSex(sex) {
  return species.reduce((acc, specie) => {
    const { name, location } = specie;
    if (location === 'NE') {
      acc.NE.push({ [name]: specie.residents
        .filter((resident) => resident.sex === sex.sex).map((resident) => resident.name) });
    } if (location === 'NW') {
      acc.NW.push({ [name]: specie.residents
        .filter((resident) => resident.sex === sex.sex).map((resident) => resident.name) });
    } if (location === 'SE') {
      acc.SE.push({ [name]: specie.residents
        .filter((resident) => resident.sex === sex.sex).map((resident) => resident.name) });
    } if (location === 'SW') {
      acc.SW.push({ [name]: specie.residents
        .filter((resident) => resident.sex === sex.sex).map((resident) => resident.name) });
    }
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function getAnimalSexSort(sex) {
  return species.reduce((acc, specie) => {
    const { name, location } = specie;
    if (location === 'NE') {
      acc.NE.push({ [name]: specie.residents
        .filter((resident) => resident.sex === sex.sex).map((resident) => resident.name).sort() });
    } if (location === 'NW') {
      acc.NW.push({ [name]: specie.residents
        .filter((resident) => resident.sex === sex.sex).map((resident) => resident.name).sort() });
    } if (location === 'SE') {
      acc.SE.push({ [name]: specie.residents
        .filter((resident) => resident.sex === sex.sex).map((resident) => resident.name).sort() });
    } if (location === 'SW') {
      acc.SW.push({ [name]: specie.residents
        .filter((resident) => resident.sex === sex.sex).map((resident) => resident.name).sort() });
    }
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function callIf(options) {
  if (options.sex && options.sorted) {
    return getAnimalSexSort(options);
  }
  if (options.sex) {
    return getAnimalSex(options);
  }
  return getAnimalTrue();
}
function getAnimalMap(options) {
  if (!options || !options.includeNames) return getAnimalByLocation(options);
  if (options.sorted && !options.sex) {
    return getAnimalSort();
  }
  return callIf(options);
}

module.exports = getAnimalMap;
