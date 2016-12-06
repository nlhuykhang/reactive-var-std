const b = require('reactive-var-std');
const Tracker = b.Tracker;
const StdReactiveVar = b.StdReactiveVar;

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
