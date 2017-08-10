'use strict'

const map = (arr, func) => {
    
    if (arr.length === 1)
        return func(arr[0]);

    const [head, ...tail] = arr;
    return [func(head), map(tail, func)];
}

export default map;
