'use strict'

const filter = (arr = [], func = item => item) => {
    let counter = 0;

    const internalFilter = (arr2) => {
        if (arr2.length === 0)
            return [];

        const [head, ...tail] = arr2;

        return func(head, counter, arr) ? [
            head,
            ...internalFilter(tail, counter++)
        ] : [
            ...internalFilter(tail, counter++)
        ];
    }

    return internalFilter(arr, counter);
}

export default filter;