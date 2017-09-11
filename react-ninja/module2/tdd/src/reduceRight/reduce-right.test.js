'use strict'

import { expect } from 'chai';
import reduceRight from './reduce-right';

it('should be a function', () => {
    expect(reduceRight).to.be.a('function');
});

it('reduceRight([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () => {
    const before = reduceRight([1, 2, 3], (acc, item) => acc + item, 0);
    const after = 6;
    expect(before).to.be.equal(after);
});

it('reduceRight([2, 4, 6], (acc, item) => acc + item, 0) should return 12', () => {
    const before = reduceRight([2, 4, 6], (acc, item) => acc + item, 0);
    const after = 12;
    expect(before).to.be.equal(after);
});

it('reduceRight([2, 4, 6], (acc, item) => acc + item, 10) should return 22', () => {
    const before = reduceRight([2, 4, 6], (acc, item) => acc + item, 10);
    const after = 22;
    expect(before).to.be.equal(after);
});

it('reduceRight([2, 4, 6], (acc, item) => acc + item) should return 22', () => {
    const before = reduceRight([2, 4, 6], (acc, item) => acc + item);
    const after = 12;
    expect(before).to.be.equal(after);
});

it('reduceRight([1, 1, 1], (acc, item, index) => acc + item + index) should return 4', () => {
    const before = reduceRight([1, 1, 1], (acc, item, index) => acc + item + index);
    const after = 4;
    expect(before).to.be.equal(after);
});

it('reduceRight([1, 1, 1], (acc, item, index) => acc + item + index, 0) should return 6', () => {
    const before = reduceRight([1, 1, 1], (acc, item, index) => acc + item + index, 0);
    const after = 6;
    expect(before).to.be.equal(after);
});

it('reduceRight([1, 1, 1], (acc, item, index, arr) => acc + arr[item]) should return 3', () => {
    const before = reduceRight([1, 1, 1], (acc, item, index, arr) => acc + arr[item], 0);
    const after = 3;
    expect(before).to.be.equal(after);
});

it('reduceRight(["one", "two"], (acc, item, index, arr) => { acc["number-" + item] = item; return acc }, {}) ', () => {
    const before = reduceRight(["one", "two"], (acc, item, index, arr) => { acc["number-" + item] = item; return acc }, {});
    const after = { "number-one": "one", "number-two": "two"};
    expect(before).to.be.deep.equal(after);
});

it('reduceRight("array", () => {}) should throw a TypeError exception with message: "First parameter must be an array"', () => {
    let error;
    try {
        reduceRight("array", () => {});
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('First parameter must be an array');
});

it('reduceRight([1, 2], "function") should throw a TypeError exception with message: "Second parameter must be a function"', () => {
    let error;
    try {
        reduceRight([1, 2], "function");
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('Second parameter must be a function');
});
