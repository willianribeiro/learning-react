'use strict'

const map = (arr, func) => {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(func(arr[i], i, arr));
  }

  return output;
}

export default map;
