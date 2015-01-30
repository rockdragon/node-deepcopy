var copyUtils = require('../index');
var deepCopy = copyUtils.deepCopy,
    isFunction = copyUtils.isFunction,
    isRegExp = copyUtils.isRegExp,
    isUndefined = copyUtils.isUndefined,
    isBoolean = copyUtils.isBoolean;
var toValue = function(obj){
    return isFunction(obj) || isRegExp(obj) || isBoolean(obj)
        ? obj.toString()
        : JSON.stringify(obj);
};
describe('deep copy of the Complex Object', function () {
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
    it('duplication should equal to the source', function () {
        var h = new foo();
        var cloned2 = deepCopy(h);
        toValue(cloned2).should.equal(toValue(h));
    });
    it('duplication should not equal to the source after modifying', function () {
        var h = new foo();
        var cloned2 = deepCopy(h);
        cloned2.a[0].e = 5;
        cloned2.a[0].f = '666';
        toValue(cloned2).should.not.equal(toValue(h));

        cloned2.a[0].g.splice(0, 2);
        toValue(h.a[0].g).should.not.equal(toValue(cloned2.a[0].g));
    });
});

describe('deep copy of the Simple Object', function () {
    it('duplication should not equal to the source after modifying', function () {
        var h = new Object();
        h.a = 'string';
        var cloned2 = deepCopy(h);
        cloned2.a = 666;
        toValue(cloned2).should.not.equal(toValue(h));
    });

    it('equality of the Date', function(){
        var h = new Date();
        var cloned2 = deepCopy(h);
        cloned2.setFullYear(1999);
        toValue(cloned2).should.not.equal(toValue(h));
    });

    it('equality of the Function', function(){
        var h = function () { };
        var cloned2 = deepCopy(h);
        cloned2 = function () {
            console.log('ye')
        };
        toValue(cloned2).should.not.equal(toValue(h));
    });

    it('equality of the RegExp', function(){
        var h = new RegExp(/\w\+/gi);
        var cloned2 = deepCopy(h);
        cloned2 = new RegExp(/\d\+/gi);
        toValue(cloned2).should.not.equal(toValue(h));
    });

    it('equality of the Boolean', function(){
        var h = false;
        var cloned2 = deepCopy(true);
        toValue(cloned2).should.not.equal(toValue(h));
    });

    it('equality of the Undefined', function(){
        var h = undefined;
        var cloned2 = deepCopy(h);
        var t1 = typeof(cloned2), t2 = typeof(h);
        t1.should.equal(t2);
    });
});

describe('deep copy of the Primitive Type', function () {
    it('equality of the Number', function(){
        var h = 3333;
        var cloned2 = deepCopy(h);
        cloned2 = 444;
        toValue(cloned2).should.not.equal(toValue(h));
    });

    it('equality of the String', function(){
        var h = 'www';
        var cloned2 = deepCopy(h);
        cloned2 = 'hahaha';
        toValue(cloned2).should.not.equal(toValue(h));
    });

    it('equality of the Array', function(){
        var h = [1, 2, 3, 4, 5, 6];
        var cloned2 = deepCopy(h);
        cloned2.splice(0, 3);
        toValue(cloned2).should.not.equal(toValue(h));
    });
});