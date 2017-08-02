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