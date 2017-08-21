'use strict'

import { expect } from 'chai';
import reduce from './reduce-recursive';

it('should be a function', () => {
    expect(reduce).to.be.a('function');
});

it('reduce([1, 2, 3], (acc, item) => acc + item) should return 6', () => {
    expect(reduce([1, 2, 3], (acc, item) => acc + item)).to.be.equal(6);
});

it('reduce([10, 10, 20], (acc, item) => acc + item) should return 40', () => {
    expect(reduce([10, 10, 20], (acc, item) => acc + item)).to.be.equal(40);
});

it('reduce([10, 10, 20], (acc, item) => acc + item, 0) should return 40', () => {
    expect(reduce([10, 10, 20], (acc, item) => acc + item, 0)).to.be.equal(40);
});

it('reduce([10, 10, 20], (acc, item) => acc + item, 10) should return 50', () => {
    expect(reduce([10, 10, 20], (acc, item) => acc + item, 10)).to.be.equal(50);
});

it('reduce([1, 2], (acc, item) => { acc["number-" + item] = item }, {}) should return { "number-1": 1, "number-2": 2 }', () => {
    const before = reduce([1, 2],
    (acc, item) => {
        acc["number-" + item] = item;
        return acc;
    }, {});
    const after = { 'number-1': 1, 'number-2': 2 };
    expect(before).to.be.deep.equal(after);
});

it('reduce([1, 1, 1], (acc, item, index) => acc + index, 0) shoud return 3', () => {
    const before = reduce([1, 1, 1], (acc, item, index) => acc + index, 0);
    const after = 3;
    expect(before).to.be.equal(after);
});

it('reduce([2,3], (acc, item, index, arr) => acc + arr[index], 0) should return 5', () => {
    const before = reduce([2,3], (acc, item, index, arr) => acc + arr[index], 0);
    const after = 5;
    expect(before).to.be.equal(after);
});
