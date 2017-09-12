'use strict'

const some = (arr, func) => {
    if (!Array.isArray(arr))
        throw new TypeError('First parameter must be an array');

    if (typeof func !== 'function')
        throw new TypeError('Second parameter must be a function');

    return (function someInternal(arrayInternal, counter) {
        const [head, ...tail] = arrayInternal;

        return arrayInternal.length === 0
            ? false
            : func(head, counter, arr)
                ? true
                : someInternal(tail, counter + 1)

    })(arr, 0);
}

export default some;