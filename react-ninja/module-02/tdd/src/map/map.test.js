'use strict'

import { expect } from 'chai';
import map from './map';

it('should be a function', () => {
  expect(map).to.be.a('function');
});

it('map([1,2], (item) => item) should return [1,2]', () => {
  expect(map([1,2], (item) => item)).to.be.deep.equals([1,2]);
});

it('map([1,2], (item, index) => index) should return [0,1]', () => {
  expect(map([1,2], (item, index) => index)).to.be.deep.equals([0,1]);
});

it('map([1,2], (item, index, arr) => arr) should return [[1,2],[1,2]]', () => {
  expect(map([1,2], (item, index, arr) => arr))
    .to.be.deep.equals([[1,2],[1,2]]);
});

it('map() should return []', () => {
  expect(map()).to.be.deep.equals([]);
});

it('map([1,2]) should return [1,2]', () => {
  expect(map([1,2])).to.be.deep.equals([1,2]);
});

it('map(1) should throw TypeError', () => {
  let error;

  try {
    map(1);
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError');
});

it('map(1) should throw TypeError with message: "First parameter must be an array"', () => {
  let error;

  try {
    map(1);
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('First parameter must be an array');
});


it('map([1, 2], "function") should throw TypeError"', () => {
  let error;

  try {
    map([1, 2], 'function');
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError');
});

it('map([1, 2], "function") should throw TypeError with message: "Second parameter must be a function"', () => {
  let error;

  try {
    map([1, 2], 'function');
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('Second parameter must be a function');
});
