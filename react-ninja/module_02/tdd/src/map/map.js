'use strict'

const map = (arr = [], func = (arr) => arr) => {
  if (!Array.isArray(arr))
    throw new TypeError('First parameter must be an array');

  if (typeof func !== 'function')
    throw new TypeError('Second parameter must be a function');

  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(func(arr[i], i, arr));
  }

  return output;
}

export default map;
