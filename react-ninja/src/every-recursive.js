'use strict'

const every = (arr, func) => {
    return !!arr && !!func ? (
        (function everyInternal(arrInternal, counter) {
            const [head, ...tail] = arrInternal;

            return arrInternal.length === 1 ? func(head, counter, arr) : (
                func(head, counter, arr) && everyInternal(tail, counter + 1)
            );
        })(arr, 0)
    ) : null;
}

export default every;