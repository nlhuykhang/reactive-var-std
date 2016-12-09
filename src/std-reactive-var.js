import Tracker from 'trackr';

export default class StdReactiveVar {
  constructor(initialValue, equalsFunc) {
    this._oldValue = null;
    this._curValue = initialValue;

    this._equalFunc = equalsFunc;

    this._dep = new Tracker.Dependency();
  }

  _isEqual(newVal) {
    const curValue = this._curValue;

    if (curValue !== newVal) {
      return false;
    }
      // XXX: what is this? so true if curValue is undefined, null, or object? why?
    return (
      (!curValue) ||
      (typeof curValue === 'number') ||
      (typeof curValue === 'boolean') ||
      (typeof curValue === 'string')
    );
  }

  get() {
    if (Tracker.active) {
      this._dep.depend();
    }
    return this._curValue;
  }

  getOld() {
    return this._oldValue;
  }

  getNonReactive() {
    return this._curValue;
  }

  set(newValue) {
    if (this._equalFunc && this._equalFunc(this._curValue, newValue)) {
      return;
    }

    if (this._isEqual(newValue)) {
      return;
    }

    this._oldValue = this._curValue;
    this._curValue = newValue;

    this._dep.changed();
  }

  toString() {
    return `StdReactiveVar{${this.get()}}`;
  }

  _numListeners() {
    return Object.keys(this._dep._dependentsById).length;
  }
}
