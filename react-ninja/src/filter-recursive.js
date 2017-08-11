'use strict'

const filter = (arr = [], func) => {
    if (arr.length === 0)
        return [];
    
    const [head, ...tail] = arr;
    return [
        func(head),
        ...filter(tail, func)
    ];
}

export default filter;