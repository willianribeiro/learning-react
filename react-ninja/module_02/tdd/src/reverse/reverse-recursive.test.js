'use strict'

import { expect } from 'chai';
import reverse from './reverse-recursive';

it('should be a function', () => {
    expect(reverse).to.be.a('function');
});

it('reverse([1, 2, 3]) should be [3, 2, 1]', () => {
    expect(reverse([1, 2, 3])).to.be.deep.equal([3, 2, 1]);
});

it('reverse([4, 5, 6]) should be [6, 5, 4]', () => {
    expect(reverse([4, 5, 6])).to.be.deep.equal([6, 5, 4]);
});

it('reverse([42]) should be [42]', () => {
    expect(reverse([42])).to.be.deep.equal([42]);
});


it('reverse("array") should throw a TypeError exception with message: "You must provide an array"', () => {
    let error;

    try {
        reverse("array");
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('You must provide an array');
});
