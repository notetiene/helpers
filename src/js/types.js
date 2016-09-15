/* exported TYPES */
/**
 * @fileOverview This file contains function to check the type of an
 * Object. It does so by using the {@link Object.prototype.toString}
 * method.
 * @author etienne(etienne@ThinkPax)
 * @name types.js<js>
 * @license GPLv3
 * Created: 2016-09-15
 */

/**
 * Get the type of an object in the form of `[object <__proto__>]`. It’s the
 * most universal way to really get the type of an Object.
 * @param {*} object - An object to find the type.
 * @returns {String} The object type in the form of `[object <__proto__>]`.
 */
function getTypeOf(object) {
  return Object.prototype.toString.call(object);
}

/**
 * Test the type of an Object. This can be accomplished because of prototype
 * inheritance where every variable has a `__proto__` property.
 * @param {*} object - An object to check if the type is type {@link type}
 * @param {string} type
 * @returns {Boolean} True if it is of the same type.
 */
function isType(object, type) {
  return getTypeOf(object) === '[object ' + type + ']';
}

/**
 * Test if the given object is a {@link Boolean}.
 * @param {*} obj - The object to test if it is a {@link Boolean}.
 * @returns {bool} True if a {@link Boolean}.
 */
function isBoolean(obj) {
  return isType(obj, 'Boolean');
}

/**
 * Test if the given object is a {@link Function}.
 * @param {*} fn - An object to test if it is a {@link Function}.
 * @returns {bool} - True if a {@link Function}.
 */
function isFunction(fn) {
  return isType(fn, 'Function');
}

/**
 * Check if an object is an {@link Array}.
 * @param {*} array - The object to check.
 * @returns {bool} True when it’s an {@link Array}, otherwise false.
 */
function isArray(array) {
    return isType(array, 'Array');
}

/**
 * Check if an object is a {@link String}.
 * @param {*} string - The object to check.
 * @returns {bool} True when it’s an {@link String}, otherwiser false.
 */
function isString(string) {
    return isType(string, 'String');
}

/**
 * Check if an object is not a {@link String}.
 * @param {*} string - The object to check.
 * @returns {bool} True when it isn’t {@link String}, otherwiser false.
 */
function notString(string) {
    return !isType(string, 'String');
}

/**
 * Check if an object is a {@link Number}.
 * @param {*} number - The object to check.
 * @returns {bool} True when it’s a {@link Number}, otherwise false.
 */
function isNumber(number) {
    // Weird, but NaN’s prototype is Number
    // return isType(number, 'Number') && !isNaN(number);
    return number === +number;
}

/**
 * Check if an object is a floating point {@link Number} (i.e. has a fractional
 * part).
 * @param {*} number - The object to check.
 * @returns {bool} True when it’s a floating point {@link Number}, otherwise
 * false.
 */
function isFloat(number) {
    return isNumber(number) && number !== (number | 0);
}

/**
 * Check if an object is an integer {@link Number} (i.e. no fractional part).
 * @param {*} number - The object to check.
 * @returns {bool} True when it’s an integer {@link Number}, otherwise false.
 */
function isInteger(number) {
    return isNumber(number) && number === (number | 0);
}

/**
 * Check if an object is not an integer {@link Number}.
 * @param {*} number - The object to check.
 * @returns {bool} True when it isn’t integer {@link Number}, otherwise false.
 */
function notInteger(number) {
    return !isInteger(number);
}

/**
 * Check if an object is {@link undefined}.
 * @param {*} object - The object to check.
 * @returns {bool} True when the object is {@link undefined}, otherwise false.
 */
function isUndefined(object) {
    return object === undefined;
}

/**
 * Check if an object is {@link null}.
 * @param {*} object - The object to check.
 * @returns {bool} True when the object is {@link null}, otherwise false.
 */
function isNull(object) {
  return object === null;
}

/**
 * Check if an object is {@link undefined} or {@link null}.
 * @param {*} object - The object to check.
 * @returns {bool} True when the object is {@link undefined} or {@link null},
 * otherwise false.
 */
function isVoid(object) {
  return isUndefined(object) || isNull(object);
}

/**
 * Check if an object is {@link undefined}.
 * @param {*} object - The object to check.
 * @returns {bool} True when the object is {@link undefined}, otherwise false.
 */
function isEmptyObject(object) {
  var value;
  if(isVoid(object)) {
    return true;
  }
  try {
     value = Object.keys(object) > 0;
  } catch(e) {
    return true;
  }
  return value;
}

// types.js<js> ends here
