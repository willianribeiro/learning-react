'use strict'

const some = (arr, func) => {
    if (!Array.isArray(arr))
        throw new TypeError('First parameter must be an array');

    if (typeof func !== 'function')
        throw new TypeError('Second parameter must be a function');

    for(let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr))
            return true
    }

    return false
}

export default some;