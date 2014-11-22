node-deepcopy
======

[![Build Status](https://travis-ci.org/rockdragon/node-deepcopy.svg?branche=master)](https://travis-ci.org/rockdragon/node-deepcopy) [![Coverage Status](https://coveralls.io/repos/rockdragon/node-deepcopy/badge.png?branche=master)](https://coveralls.io/r/rockdragon/node-deepcopy) [![npm version](https://badge.fury.io/js/node-deepcopy.svg?branche=master)](http://badge.fury.io/js/node-deepcopy) [![Dependency Status](https://david-dm.org/rockdragon/node-deepcopy.svg?branche=master)](https://david-dm.org/rockdragon/node-deepcopy)

[![https://www.npmjs.org/package/request-gb](https://nodei.co/npm/node-deepcopy.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/node-deepcopy)

deep copy for any JavaScript object.

Installation
======
```
	$ npm install node-deepcopy
```

Example
======

```javascript
var deepcopy = require('node-deepcopy').deepcopy;
var toValue = function(obj){
    return isFunction(obj) || isRegExp(obj) ? obj.toString() : JSON.stringify(obj);
};
var foo = function () {
        this.c = 3;
        this.a = [
            {e: 2, f: 'good', g: [1, 2, 3]}
        ];
        this.b = 'b';
        this.d = function () {
            console.log("I'm foo.d.")
        };
    };
var source = new foo();
var cloned = deepcopy(source);
cloned2.a[0].f = '666';
console.log(cloned === source));
```

License
======
MIT