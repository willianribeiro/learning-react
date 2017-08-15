'use strict'


const every = (arr, func) => { // [1, 2, 3] | item => item > 1
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
