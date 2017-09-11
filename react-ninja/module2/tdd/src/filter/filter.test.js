'use strict'

import { expect } from 'chai';
import filter from './filter';

it('should be a function', () => {
    expect(filter).to.be.a('function');
});

it('filter() should return []', () => {
    expect(filter()).to.be.deep.equal([]);
});

it('filter([]) should return []', () => {
    expect(filter([])).to.be.deep.equal([]);
});

it('filter([1]) should return [1]', () => {
    expect(filter([1])).to.be.deep.equal([1]);
});

it('filter([1,2,3,4], item => item > 1) should return [2,3,4]', () => {
    expect(filter([1,2,3,4], item => item > 1)).to.be.deep.equal([2,3,4]);
});

it('filter([2,2,3,4], item => item !== 2) should return [3,4]', () => {
    expect(filter([2,2,3,4], item => item !== 2)).to.be.deep.equal([3,4]);
});

it('filter([1,1,1,1], item => item === 10) should return []', () => {
    expect(filter([1,1,1,1], item => item === 10)).to.be.deep.equal([]);
});

it('filter([null,10,1,1], item => item === 10) should return []', () => {
    expect(filter([null,10,1,1], item => item === 10)).to.be.deep.equal([10]);
});

it('filter([1,2,3,5], (item, index) => item === index + 1) should return [1,2,3]', () => {
    const before = filter([1,2,3,5], (item, index) => item === index + 1);
    expect(before).to.be.deep.equal([1,2,3]);
});

it('filter([1,3,4,1,2,2], (item, index, arr) => index === arr.indexOf(item) should return [1,3,4,2]', () => {
    const before = filter([1,3,4,1,2,2], (item, index, arr) => index === arr.indexOf(item));
    expect(before).to.be.deep.equal([1,3,4,2]);
});

it('filter("array", () => {}) should throw a TypeError exception with message: "First parameter must be an array"', () => {
    let error;

    try {
        filter("array", () => {})
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('First parameter must be an array');
});

it('filter([1, 2], "function") should throw a TypeError exception with message: "Second parameter must be a function"', () => {
    let error;

    try {
        filter([1, 2], "function")
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('Second parameter must be a function');
});