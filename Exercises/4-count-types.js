'use strict';

const typesArr = [
  1, 'str', true, false, Infinity, -Infinity,
  'some', 'string', 'in', 'array', true, 123, NaN, undefined,
  123n, {},
];

const countTypesInArray = (arr) => {
  const obj = {};
  for (const item of arr) {
    const itemType = typeof item;
    if (!obj[itemType]) obj[itemType] = 0;
    obj[itemType] += 1;
  }
  return obj;
};

countTypesInArray(typesArr);

module.exports = { countTypesInArray };
