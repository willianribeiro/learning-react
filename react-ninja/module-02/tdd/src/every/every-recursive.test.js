'use strict'

import { expect } from 'chai';
import every from './every-recursive';

it('should be a function', () => {
    expect(every).to.be.a('function');
});

it('every([1,2,3], item => item > 1) should return false', () => {
    expect(every([1,2,3], item => item > 1)).not.to.be.ok;
});

it('every([1,2,3], item => item < 3) should return false', () => {
    expect(every([1,2,3], item => item < 3)).not.to.be.ok;
});

it('every([3,3,3], item => item === 3) should return true', () => {
    expect(every([3,3,3], item => item === 3)).to.be.ok;
});

it('every([10,20,30], item => item > 0) should return true', () => {
    expect(every([10,20,30], item => item > 0)).to.be.ok;
});

it('every([1,2,3], (item, index) => item > index) should return true', () => {
    expect(every([1,2,3], (item, index) => item > index)).to.be.ok;
});

it('every([1,2,3], (item, index) => item < index) should return false', () => {
    expect(every([1,2,3], (item, index) => item < index)).not.to.be.ok;
});

it('every([1,2,3], (item, index, arr) => item === arr[index]) should return true', () => {
    expect(every([1,2,3], (item, index, arr) => item === arr[index])).to.be.ok;
});

it('every("1,2,3", (item) =>  item) should throw a TypeError', () => {
    let error;

    try {
        every("1,2,3", (item) =>  item);
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
})

it('every("1,2,3", (item) =>  item) should throw a TypeError with message: First parameter must to be an array', () => {
    let error;

    try {
        every("1,2,3", (item) =>  item);
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('First parameter must to be an array');
})

it('every([1, 2, 3], "func") should throw a TypeError', () => {
    let error;

    try {
        every([1, 2, 3], "func");
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
})

it('every([1, 2, 3], "func") should throw a TypeError with message: Second parameter must to be a function', () => {
    let error;

    try {
        every([1, 2, 3], "func");
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
    expect(error.message).to.be.equal('Second parameter must to be a function');
})
