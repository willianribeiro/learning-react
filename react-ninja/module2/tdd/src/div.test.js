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