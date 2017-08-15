'use strict'

const filter = (arr = [], func = arr => arr ) => {
    const output = [];

    arr.forEach((item, index) => {
        if (func(item, index, arr)) output.push(item);
    });

    return output;
}

export default filter;