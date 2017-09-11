'use strict'

import { expect } from 'chai';
import some from './some-recursive';

it('should be a function', () => {
    expect(some).to.be.a('function');
});

it('some([1,2,3], item => item)) should return true', () => {
    expect(some([1, 2, 3], item => item)).to.be.ok;
});

it('some([1,2,3], item => item === 10)) should return true', () => {
    expect(some([10, 10, 10], item => item === 10)).to.be.ok;
});

it('some([1,2,3], item => item === 0)) should return false', () => {
    expect(some([1, 2, 3], item => item === 0)).not.to.be.ok;
});

it('some([1,2,3], item => item === 0)) should return false', () => {
    expect(some([1, 2, 3], item => item === 10)).not.to.be.ok;
});

it('some([1,2,3], (item, index) => item - 1 === index)', () => {
    expect(some([1, 2, 3], (item, index) => item - 1 === index)).to.be.ok;
});

it('some([1,2,3], (item, index, arr) => arr[index] === item)', () => {
    expect(some([1, 2, 3], (item, index, arr) => arr[index] === item)).to.be.ok;
});
