'use strict'

const sum = (arr = []) => {
    return arr.reduce((total, item) => total + item, 0);
}

export default sum;