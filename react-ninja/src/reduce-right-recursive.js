'use strict'

import reverse from './reverse';

const isUndefined = (value) => value === undefined;

const reduceRight = (arr, func, initialValue) => {
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