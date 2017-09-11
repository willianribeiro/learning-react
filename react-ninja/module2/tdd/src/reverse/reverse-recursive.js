'use strict'

const reverse = (arr) => {
    if (!Array.isArray(arr))
        throw new TypeError('You must provide an array');

    return arr.length === 0 ? [] : [
        arr.slice(-1)[0],
        ...reverse(arr.slice(0, - 1)) 
    ]
}

export default reverse;
