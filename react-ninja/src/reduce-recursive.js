'use strict'

const isInitialValueUndefined = (initialValue) => initialValue === undefined;

const reduce = (arr, func, initialValue) => {
    const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue;
    const arrInternal = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr;

    return (function reduceInternal(accInternal, arrInternal2, counter) {
        const [head, ...tail] = arrInternal2;
        const accNext = () => func(accInternal, head, counter, arr);

        return arrInternal2.length === 0
            ? accInternal
            : reduceInternal(accNext(), tail, counter + 1);
    })(acc, arrInternal, 0);
}

export default reduce;
