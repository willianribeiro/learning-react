'use strict'

import reverse from '../reverse/reverse';

const isUndefined = (value) => value === undefined;

const reduceRight = (arr, func, initialValue) => {
    if (!Array.isArray(arr))
        throw new TypeError('First parameter must be an array');

    if(typeof func !== 'function') 
        throw new TypeError('Second parameter must be a function');

    const arrReversed= reverse(arr);
    const [head, ...tail] = arrReversed;
    const acc = isUndefined(initialValue) ? head : initialValue;
    const arrToIterate = isUndefined(initialValue) ? tail : arrReversed ;

    return (function reduceRightInternal(accInternal, arrInternal, counter) {
        const [head, ...tail] = arrInternal;
        const nextAcc = () => func(accInternal, head, counter, arr);

        return arrInternal.length === 0
            ? accInternal
            : reduceRightInternal(nextAcc(), tail, counter + 1);

    })(acc, arrToIterate, 0);
}

export default reduceRight;