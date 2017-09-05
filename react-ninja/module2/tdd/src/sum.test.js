'use strict'

import { expect } from 'chai';
import sum from './sum';

it('sum should be a function', () => {
    expect(sum).to.be.a('function');
});

it('sum(1, 2) should return 3', () => {
    expect(sum(1, 2)).to.be.equal(3);
});

it('sum(2, 3) should return 5', () => {
    expect(sum(2, 3)).to.be.equal(5);
});

it('sum("2", 3) should throw an TypeError', () => {
    let error;

    try {
        sum("2", 3);
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
});

it('sum("2", 3) should throw an TypeError with message: Parameter "a" must be a Number', () => {
    let error;

    try {
        sum("2", 3);
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('Parameter "a" must be a Number');
});


it('sum(2, "3") should throw an TypeError', () => {
    let error;

    try {
        sum(2, "3");
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
});

it('sum(2, "3") should throw an TypeError with message: Parameter "b" must be a Number', () => {
    let error;

    try {
        sum(2, "3");
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('Parameter "b" must be a Number');
});
