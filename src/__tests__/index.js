/* eslint-disable */

import { expect } from 'chai';
const { describe, it } = global;

import StdReactiveVar from '../std-reactive-var.js';

import Tracker from 'trackr';

describe('reactive var only', function() {
  it('should construct the object well', function() {
    const target = new StdReactiveVar(10);

    expect(target._oldValue).to.be.null;
    expect(target._equalFunc).to.be.undefined;
    expect(target._dep).to.be.an.instanceof(Tracker.Dependency);

    expect(target._curValue).to.be.equal(10);

    expect(target._isEqual).to.be.function;
    expect(target.get).to.be.function;
    expect(target.getOld).to.be.function;
    expect(target.getNonReactive).to.be.function;
    expect(target.set).to.be.function;
    expect(target.toString).to.be.function;
    expect(target._numListeners).to.be.function;
  });

  it('_isEqual should work with number', function() {
    const target = new StdReactiveVar(10);

    expect(target._isEqual(10)).to.be.true;
    expect(target._isEqual('10')).to.be.false;
    expect(target._isEqual(11)).to.be.false;
  });

  it('_isEqual should work with object', function() {
    const obj = {};
    const target = new StdReactiveVar(obj);

    expect(target._isEqual(obj)).to.be.false;
    expect(target._isEqual({})).to.be.false;
    expect(target._isEqual(11)).to.be.false;
  });

  it('get should work with number', function() {
    const target = new StdReactiveVar(10);
    expect(target.get()).to.be.equal(10);
  });

  it('get should work with string', function() {
    const target = new StdReactiveVar('10');
    expect(target.get()).to.be.equal('10');
  });

  it('get should work with object', function() {
    const obj = {};
    const target = new StdReactiveVar(obj);
    expect(target.get()).to.be.equal(obj);
  });

  it('get should work with null', function() {
    const target = new StdReactiveVar(null);
    expect(target.get()).to.be.null;
  });

  it('get should work with undefined', function() {
    const target = new StdReactiveVar(undefined);
    expect(target.get()).to.be.undefined;
  });

  it('getOld should work', function() {
    const target = new StdReactiveVar(undefined);

    // XXX not really sure I doing it right here? is using .set to test .getOld is the right way?
    target.set(1);
    expect(target.getOld()).to.be.undefined;

    target.set('1');
    expect(target.getOld()).to.be.equal(1);

    target.set(null);
    expect(target.getOld()).to.be.equal('1');

    target.set(undefined);
    expect(target.getOld()).to.be.null;
  });

  it('getNonReactive should work', function() {
    const target = new StdReactiveVar(undefined);

    target.set(1);
    expect(target.getNonReactive()).to.be.equal(1);

    target.set('1');
    expect(target.getNonReactive()).to.be.equal('1');

    target.set(null);
    expect(target.getNonReactive()).to.be.null;

    target.set(undefined);
    expect(target.getNonReactive()).to.be.undefined;
  });

  it('set should work', function() {
    const target = new StdReactiveVar(undefined);

    target.set(1);

    expect(target._oldValue).to.be.undefined;
    expect(target._curValue).to.be.equal(1);

    target.set(1);

    expect(target._oldValue).to.be.undefined;
    expect(target._curValue).to.be.equal(1);

    target.set(2);

    expect(target._oldValue).to.be.equal(1);
    expect(target._curValue).to.be.equal(2);

    target.set(null);

    expect(target._oldValue).to.be.equal(2);
    expect(target._curValue).to.be.null;
  });

  it('_equalFunc should work', function() {
    const target = new StdReactiveVar(undefined, (a, b) => a === b);

    target.set(1);

    expect(target._oldValue).to.be.undefined;
    expect(target._curValue).to.be.equal(1);

    target.set(1);

    expect(target._oldValue).to.be.undefined;
    expect(target._curValue).to.be.equal(1);

    target.set(2);

    expect(target._oldValue).to.be.equal(1);
    expect(target._curValue).to.be.equal(2);

  });

  it('toString should work', function() {
    const target = new StdReactiveVar(undefined);

    expect(target.toString()).to.be.equal('StdReactiveVar{undefined}');

    target.set(1);
    expect(target.toString()).to.be.equal('StdReactiveVar{1}');

    target.set(2);
    expect(target.toString()).to.be.equal('StdReactiveVar{2}');

  });
});

describe('reactive var with tracker', function() {
  it('', function() {});
});
