# Standalone Reactive Var

[![CircleCI](https://circleci.com/gh/nlhuykhang/reactive-var-std/tree/master.svg?style=shield)](https://circleci.com/gh/nlhuykhang/reactive-var-std/tree/master) [![Coverage Status](https://coveralls.io/repos/github/nlhuykhang/reactive-var-std/badge.svg?branch=master)](https://coveralls.io/github/nlhuykhang/reactive-var-std?branch=master) [![npm version](https://badge.fury.io/js/reactive-var-std.svg)](https://badge.fury.io/js/reactive-var-std) [![dependencies](https://david-dm.org/nlhuykhang/reactive-var-std/status.svg)](https://david-dm.org/nlhuykhang/reactive-var-std?view=list) [![Known Vulnerabilities](https://snyk.io/test/github/nlhuykhang/reactive-var-std/badge.svg)](https://snyk.io/test/github/nlhuykhang/reactive-var-std)

A Standalone version of ReactiveVar package from Meteor. Lets you write reactive code with ease outside of Meteor

[Check out the demo here](https://nlhuykhang.github.io/reactive-var-std/)

## Install

##### NPM
```bash
npm install --save reactive-var-std
```

##### CDN
```html
<script src="//cdn.jsdelivr.net/reactive-var-std/1.1.4/reactive-var-std.min.js"></script>
<!-- OR  -->
<script src="//cdn.jsdelivr.net/reactive-var-std/latest/reactive-var-std.min.js"></script>
```

## Usage

##### ES6

```javascript
import StdReactiveVar, { Tracker } from 'reactive-var-std';

// or if you do not use ES6
// var StdReactiveVar = require('reactive-var-std');
// var Tracker = StdReactiveVar.Tracker;
// var StdReactiveVar = StdReactiveVar.default;

// create a creative var instance
const reactive = new StdReactiveVar(0);

// wrap the reactive instance inside a computation block created by Tracker.autorun
Tracker.autorun(() => {
  // log the value whenever it changes
  console.log(reactive.get());
});

// change the value 1st time
reactive.set(1);
// ---> the console will show: 1

// change the value 1st time
reactive.set(10);
// ---> the console will show: 10
```

##### ES5

```javascript
var StdReactiveVar = require('reactive-var-std');
var Tracker = StdReactiveVar.Tracker;
var StdReactiveVar = StdReactiveVar.default;

// create a creative var instance
var reactive = new StdReactiveVar(0);

// wrap the reactive instance inside a computation block created by Tracker.autorun
Tracker.autorun(function() {
  // log the value whenever it changes
  console.log(reactive.get());
});

// change the value 1st time
reactive.set(1);
// ---> the console will show: 1

// change the value 1st time
reactive.set(10);
// ---> the console will show: 10
```

## API

### StdReactiveVar(v:Any)

### .get()

### .set(v:Any)

### .getOld()

### .getNonReactive()


## License

[MIT](LICENSE)
