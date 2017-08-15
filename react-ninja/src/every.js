'use strict'


const every = (arr, func) => {
    let output = true;

    if (!arr || !func) return null;

    arr.forEach((item, index, arr) => {
        if (!func(item, index, arr)) {
            output = false;
        }
    });

    return output;
}

export default every;
