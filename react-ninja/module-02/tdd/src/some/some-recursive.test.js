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

it('some("array", () => {}) should throw a TypeError exception with message: "First parameter must be an array"', () => {
    let error;

    try {
        some("array", () => {});
    } catch (e) {
        error = e;
    }
    
    expect(error.name).to.be.equal('TypeError');    
    expect(error.message).to.be.equal('First parameter must be an array');
});

it('some([1, 2], "function") should throw a TypeError exception with message: "Second parameter must be a function"', () => {
    let error;

    try {
        some([1, 2], "function");
    } catch (e) {
        error = e;
    }
    
    expect(error.name).to.be.equal('TypeError');    
    expect(error.message).to.be.equal('Second parameter must be a function');
});
