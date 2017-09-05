'use strict'

import { expect } from 'chai';
import sum from './sum-recursive';

it('should be a function', () => {
    expect(sum).to.be.a('function');
});

it('sum([1,2]) should return 3', () => {
    expect(sum([1,2])).to.be.equal(3);
});

it('sum([10,5]) should return 15', () => {
    expect(sum([10,5])).to.be.equal(15);
});

it('sum([10,5,5]) should return 20', () => {
    expect(sum([10,5,5])).to.be.equal(20);
});

it('sum([10,10,10]) should return 30', () => {
    expect(sum([10,10,10])).to.be.equal(30);
});

it('sum([10]) should return 10', () => {
    expect(sum([10])).to.be.equal(10);
});

it('sum([]) should return 0', () => {
    expect(sum([])).to.be.equal(0);
});

it('sum() should return 0', () => {
    expect(sum()).to.be.equal(0);
});

it('sum(["1", "2", "3"]) should throw an TypeError', () => {
    let error;

    try {
        sum(["1", "2", "3"]);
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
});

it('sum(["1", "2", "3"]) should throw an TypeError with message: You need to provide an array of string', () => {
    let error;

    try {
        sum(["1", "2", "3"]);
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('You need to provide an array of string');
});
