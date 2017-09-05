'use strict'

const sum = (arr = []) => {
    return arr.reduce((total, item) => {
        if (typeof total !== 'number' || typeof item !== 'number')
            throw TypeError('You need to provide an array of string');

        return total + item;
    }, 0);
}

export default sum;
