import Tracker from 'trackr';

export class StdReactiveVar {
  constructor(initialValue, equalsFunc) {

    this._oldValue = null;
    this._curValue = initialValue;

    this._equalFunc = equalsFunc;

    this._dep = new Tracker.Dependency();
  }

  _isEqual(oldVal, newVal) {
    if (oldVal != newVal) {
      return false;
    } else {
      // XXX: what is this? so true if oldVal is undefined, null, or object? why?
      return (
        (!oldVal) ||
        (typeof oldVal === 'number') ||
        (typeof oldVal === 'boolean') ||
        (typeof oldVal === 'string')
      );
    }
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

    if ((this._equalFunc || this._isEqual)(this._curValue, newValue)) {
      return;
    }

    this._oldValue = this._curValue;
    this._curValue = newValue;

    this._dep.changed();
  }

  toString() {
    return `StdReactiveVar{${this.get()}}`
  }

  _numListeners() {
    return Object.keys(this._dep._dependentsById).length;
  }
}
