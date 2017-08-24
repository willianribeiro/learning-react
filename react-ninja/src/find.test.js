'use strict'

import { expect } from 'chai';
import find from './find';

it('should be a function', () => {
    expect(find).to.be.a('function');
});

it('find([1, 2, 3], (item) => item === 2) should return 2', () => {
    const before = find([1, 2, 3], (item) => item === 2);
    const after = 2;
    expect(before).to.be.equal(after);
});

it('find([1, 2, 3], (item) => item < 3) should return 1', () => {
    const before = find([1, 2, 3], (item) => item < 3);
    const after = 1;
    expect(before).to.be.equal(after);
});


it('find([1, 2, 3], (item) => item > 3) should return undefined', () => {
    const before = find([1, 2, 3], (item) => item > 3);
    const after = undefined;
    expect(before).to.be.equal(after);
});

it('find([1, 2, 3], (item, index) => index === 0) should return 1', () => {
    const before = find([1, 2, 3], (item, index) => index === 0);
    const after = 1;
    expect(before).to.be.equal(after);
});

it('find([1, 2, 3], (item, index) => index > 100) should return undefined', () => {
    const before = find([1, 2, 3], (item, index) => index > 100);
    const after = undefined;
    expect(before).to.be.equal(after);
});

it('find([1, 2, 3], (item, index, arr) => arr[index] === item) should return 1', () => {
    const before = find([1, 2, 3], (item, index, arr) => arr[index] === item);
    const after = 1;
    expect(before).to.be.equal(after);
});