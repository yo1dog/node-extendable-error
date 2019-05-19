# node-extendable-error

## Quick Start

```javascript
const ExtendableError = require('@yo1dog/extendable-error');

class MyError extends ExtendableError {
  constructor(message) {
    super(message);
  }
}

throw new MyError('hello world');

/*
MyError: hello world
    at readme.js:9:1
    at Script.runInThisContext (vm.js:123:20)
    ...
*/
```

# Docs

## `ExtendableError.setUnenumerable(obj, key, value)`

 param  | type                 | description
--------|----------------------|-------------
`obj`   | Object               | Object to modify.
`key`   | string/number/Symbol | Key to modify.
`value` | any                  | Value to set.

Sets a property on the given object and makes it unenumerable.

Equivalent to:
```javascript
obj[key] = value;
Object.defineProperty(obj, key, {enumerable: false});
```

-----

## `ExtendableError.makeUnenumerable(obj, key)`

 param  | type                 | description
--------|----------------------|-------------
`obj`   | Object               | Object to modify.
`key`   | string/number/Symbol | Key to modify.

Sets makes a property on the given object unenumerable.

Equivalent to:
```javascript
Object.defineProperty(obj, key, {enumerable: false});
```

-----

## `ExtendableError.prototype.setUnenumerable(key, value)`

 param  | type                 | description
--------|----------------------|-------------
`key`   | string/number/Symbol | Key to modify.
`value` | any                  | Value to set.

Equivalent to:
```javascript
ExtendableError.setUnenumerable(this, key, value);
```

-----

## `ExtendableError.prototype.makeUnenumerable(key)`

 param  | type                 | description
--------|----------------------|-------------
`key`   | string/number/Symbol | Key to modify.

Equivalent to:
```javascript
ExtendableError.makeUnenumerable(this, key);
```