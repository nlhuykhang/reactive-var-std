# Standalone Reactive Var
A Standalone version of ReactiveVar package from Meteor. Lets you write reactive code with ease outside of Meteor

[Check out the demo here](https://nlhuykhang.github.io/reactive-var-std/)

## Install

```bash
npm install --save reactive-var-std
```

## Usage

```javascript
import { StdReactiveVar, Tracker } from 'reactive-var-std';

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

## API

### StdReactiveVar(v:Any)
### .get()
### .set(v:Any)
### .getOld()
### .getNonReactive()

## License

[MIT](LICENSE)
