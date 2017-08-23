'use strict'

import reverse from './reverse';

const reduceRight = (arr, func, initialValue) => {
    let acc = initialValue;
    let arrCopy = reverse(arr);
    let lastIndex = arr.length - 1;

    if (initialValue === undefined) {
        acc = arr[lastIndex];
        arrCopy = reverse(arr).slice(0, lastIndex);
        lastIndex = lastIndex - 1;
    }

    return (function reduceRightInternal(accInternal, arrInternal, counter) {
        // for (let i = lastIndex; i >= 0; i--)
        //     acc = func(acc, arrCopy[i], i, arr);
        const [head, ...tail] = arrInternal;
        const nextAcc = func(accInternal, head, counter, arr);

        arrInternal.length === 0
            ? accInternal
            : reduceRightInternal(nextAcc, tail, counter + 1);
    
        return acc;
    })(acc, arrCopy, 0);
}

export default reduceRight;