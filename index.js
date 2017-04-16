module.exports.isObject = isObject;
module.exports.isDate = isDate;
module.exports.isString = isString;
module.exports.isNumber = isNumber;
module.exports.isFunction = isFunction;
module.exports.isRegExp = isRegExp;
module.exports.isUndefined = isUndefined;
module.exports.isBoolean = isBoolean;
module.exports.deepCopy = deepCopy;

function getObjectType(obj) {
    return Object.prototype.toString.call(obj);
}
function isObject(obj) {
    return typeof obj === "object" && !!obj;
}
function isDate(obj) {
    return obj instanceof Date;
}
function isString(obj) {
    return typeof obj === "string";
}
var isArray = Array.isArray || function(obj) {
    return obj instanceof Array;
}
function isNumber(obj) {
    return typeof obj === "number";
}
function isFunction(obj) {
    return obj instanceof Function;
}
function isRegExp(obj) {
    return obj instanceof RegExp;
}
function isUndefined(obj){
    return obj === undefined;
}
function isNull(obj){
    return obj === null;
}
function isBoolean(obj){
    return obj === true || obj === false;
}
function deepCopy(obj) {
    var cloneObj = null;
    if (isArray(obj))
        cloneObj = [];
    else if (isObject(obj))
        cloneObj = {};
    else if (isDate(obj))
        cloneObj = new Date(obj.toJSON());
    else if (isRegExp(obj))
        cloneObj = new RegExp(obj.valueOf());
    else
        cloneObj = obj;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var child = obj[key];
            if (isObject(child) || isArray(child))
                cloneObj[key] = deepCopy(child);
            else if (isNumber(child) ||
                isString(child) ||
                isFunction(child) ||
                isUndefined(child) ||
                isNull(child) ||
                isBoolean(child))
                cloneObj[key] = child;
        }
    }
    return cloneObj;
}
