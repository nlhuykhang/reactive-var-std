var Tracker = require('../index.js').Tracker;
var StdReactiveVar = require('../index.js').default;

a = new StdReactiveVar(1);

Tracker.autorun(() => {
  console.log('-------------------------------------');
  console.log(a.getOld());
  console.log(a.get());
  console.log('-------------------------------------');
});

setInterval(() => {
  'use strict';
  let cur = a.getNonReactive();
  a.set(cur + 1);
}, 1000);
