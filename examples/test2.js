var StdReactiveVar = require('../index.js');
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
// ---> this value won't be logged to console

// change the value 2st time
reactive.set(10);
// ---> the console will show: 10
