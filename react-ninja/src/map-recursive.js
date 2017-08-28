'use strict'

const map = (arr = [], func = (item) => item) => {
    if (!Array.isArray(arr)) 
        throw new TypeError('First parameter must be an array');

    if (typeof func !== 'function')
        throw new TypeError('Second parameter must be a function');

    const counter = 0;

    return (function mapInternal (arrInternal, counter) {
        const [head, ...tail] = arrInternal;

        return arrInternal.length === 0 ? [] : [
            func(head, counter, arr),
            ...mapInternal(tail, counter + 1)
        ];
    })(arr, counter);
}

export default map;
