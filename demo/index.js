'use strict';

var StdReactiveVar = require('../index.js');
var Tracker = StdReactiveVar.Tracker;
var StdReactiveVar = StdReactiveVar.default;

var reactive = new StdReactiveVar(0);

document.getElementById('increase-btn').addEventListener('click', function() {
  var count = reactive.getNonReactive();
  reactive.set(count + 1);
});

document.getElementById('decrease-btn').addEventListener('click', function() {
  var count = reactive.getNonReactive();
  reactive.set(count - 1);
});

var spanEl = document.getElementById('counter-span');

Tracker.autorun(function() {
  spanEl.innerText = 'Counter: ' + reactive.get();
});
