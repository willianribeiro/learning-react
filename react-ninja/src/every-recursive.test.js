'use strict'

import { expect } from 'chai';
import every from './every-recursive';

it('should be a function', () => {
    expect(every).to.be.a('function');
});

it('every([1,2,3], item => item > 1) should return false', () => {
    expect(every([1,2,3], item => item > 1)).to.be.equal(false);
});

it('every([1,2,3], item => item < 3) should return false', () => {
    expect(every([1,2,3], item => item < 3)).to.be.equal(false);
});

it('every([3,3,3], item => item === 3) should return true', () => {
    expect(every([3,3,3], item => item === 3)).to.be.equal(true);
});

it('every([10,20,30], item => item > 0) should return true', () => {
    expect(every([10,20,30], item => item > 0)).to.be.equal(true);
});

it('every([1,2,3], (item, index) => item > index) should return true', () => {
    expect(every([1,2,3], (item, index) => item > index)).to.be.equal(true);
});

it('every([1,2,3], (item, index) => item < index) should return false', () => {
    expect(every([1,2,3], (item, index) => item < index)).to.be.equal(false);
});

it('every([1,2,3], (item, index, arr) => item === arr[index]) should return true', () => {
    expect(every([1,2,3], (item, index, arr) => item === arr[index])).to.be.equal(true);
});

it('every() should return null', () => {
    expect(every()).to.be.equal(null);
});

it('every([1,2,3]) should return null', () => {
    expect(every([1,2,3])).to.be.equal(null);
});
