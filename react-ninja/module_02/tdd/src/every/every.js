'use strict'

const every = (arr, func) => {
    if (!Array.isArray(arr))
        throw TypeError('First parameter must to be an array');

    if (typeof func !== 'function')
        throw TypeError('Second parameter must to be a function');

    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) 
            return false;
    }

    return true;
}

export default every;
