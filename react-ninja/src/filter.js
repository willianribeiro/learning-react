'use strict'

const filter = (arr = [], func = arr => arr ) => {
    const output = [];

    arr.forEach((item) => {
        if (func(item)) output.push(item);
    });

    return output;
}

export default filter;