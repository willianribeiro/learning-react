'use strict'

import { expect } from 'chai';
import div from './div';

it('should be a function', () => {
    expect(div).to.be.a('function');
});

it('div(10, 5) should return 2', () => {
    expect(div(10, 5)).to.be.equal(2);
});

it('div(30, 5) should return 6', () => {
    expect(div(30, 5)).to.be.equal(6);
});

it('div("10", 2) should throw TypeError', () => {
    let error;

    try {
        div('10', 2)
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
});

it('div(10, "2") should throw TypeError', () => {
    let error;

    try {
        div(10, '2')
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
});

it('div("10", 2) should throw TypeError with message: Parameter "a" must be a Number', () => {
    let error;

    try {
        div('10', 2)
    } catch (e) {
        error = e;
    }

    expect(error.message).to.be.equal('Parameter "a" must be a Number');
});

it('div(10, "2") should throw TypeError with message: Parameter "b" must be a Number', () => {
    let error;

    try {
        div(10, '2')
    } catch (e) {
        error = e;
    }

    expect(error.message).to.be.equal('Parameter "b" must be a Number');
});
