'use strict'

const reverse = (arr) => {
    if (!Array.isArray(arr))
        throw new TypeError('You must provide an array');

    let output = []

    for (let i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i]);
    }

    return output;
}

export default reverse;