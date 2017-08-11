'use strict'

import { expect } from 'chai';
import map from './map-recursive';

it('should be a function', () => {
  expect(map).to.be.a('function');
});

it('map([1,2], (item) => item) should return [1,2]', () => {
  expect(map([1,2], (item) => item)).to.be.deep.equals([1,2]);
});

it('map([1,2,3], (item) => item + 1) should return [2,3,4]', () => {
  expect(map([1,2,3], (item) => item + 1)).to.be.deep.equals([2,3,4]);
});

it('map([1,2], (item, index) => index) should return [0,1]', () => {
  expect(map([1,2], (item, index) => index)).to.be.deep.equals([0,1]);
});

it('map([1,2], (item, index, arr) => arr) should return [[1,2],[1,2]]', () => {
  expect(map([1,2], (item, index, arr) => arr))
    .to.be.deep.equals([[1,2],[1,2]]);
});

it('map([1,2]) should return [1,2]', () => {
  expect(map([1,2])).to.be.deep.equals([1,2]);
});

it('map([]) should return []', () => {
  expect(map([])).to.be.deep.equals([]);
});

it('map() should return []', () => {
  expect(map()).to.be.deep.equals([]);
});
