'use strict';

var b = require('../index.js');
var Tracker = b.Tracker;
var StdReactiveVar = b.StdReactiveVar;

var a = new StdReactiveVar(1);

Tracker.autorun(() => {
  console.log('-------------------------------------');
  console.log(a.getOld());
  console.log(a.get());
  console.log('-------------------------------------');
});

setInterval(() => {
  'use strict';
  var cur = a.getNonReactive();
  a.set(cur + 1);
}, 1000);
