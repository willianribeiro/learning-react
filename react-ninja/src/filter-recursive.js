'use strict'

const filter = (arr = [], func = item => item) => {
    return (function filterInternal (arrayInternal, counter) {
        const [head, ...tail] = arrayInternal;

        if (arrayInternal.length === 0)
            return [];

        return func(head, counter, arr) ? [
            head,
            ...filterInternal(tail, counter + 1)
        ] : [
            ...filterInternal(tail, counter + 1)
        ];
    })(arr, 0);
}

export default filter;
