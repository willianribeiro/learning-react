'use strict'

const reduceRight = (arr, func, initialValue) => {
    let acc = initialValue;
    let arr2 = arr;
    let lastIndex = arr.length - 1;

    if (initialValue === undefined) {
        acc = arr[lastIndex];
        arr2 = arr.slice(0, lastIndex);
        lastIndex = lastIndex - 1;
    }

    for (let i = lastIndex; i >= 0; i--)
        acc = func(acc, arr2[i], i, arr);

    return acc;
}

export default reduceRight;
