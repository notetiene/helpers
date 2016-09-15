/* global TYPES*/

/**
 * @fileOverview This file contains helper functions not related to a
 * specific project.
 * @name helpers.js<js>
 * @author Etienne Prud’homme
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
 * Capitalize the first letter of a {@link String}
 * @param {String} string - The {@linkcode String} to capitalize the first letter.
 * @returns {String} A new {@linkcode String} where the first character is in uppercase.
 */
function capitalizeString(string) {
    return string.charAt(0).toLocaleUpperCase() + string.slice(1);
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
 * Call {@link callback} if it is a {@link Function}.
 * @param {*} callback - The object to call if it is a {@link Function}.
 */
function callIfFunction(callback) {
    if(isFunction(callback)) {
        callback();
    }
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
    if(isVoid(object)) {
        return true;
    }
    try {
        var value = Object.keys(object) > 0;
    } catch(e) {
        return true;
    }
    return value;
}

/**
 * Generate a random property and check if it is present in {@link obj} (in that case it starts again).
 * @param {*} obj
 * @param {Object} options
 * @param {int} options.precision - The precision of the generated number.
 * @param {int} options.prefix - The prefix before the generated number.
 * @returns {String} The property as a {@link String}.
 */
function getUniqueProperty(obj, options) {
    var prop,
        _options = options || {},
        precision = _options.precision || 100000000,
        prefix = _options.prefix || 0;

    do {
        prop = prefix + Math.floor(Math.random() * precision);
    } while(obj.hasOwnProperty(prop) === true);
    return prop;
}


/**
 * Give a random number between {@link min} to {@link max} values.
 * @param {int|float} min - The minimum number (inclusive).
 * @param {int|float} max - The maximum number (inclusive).
 * @param {bool} integer
 * @returns {int|float} A number between {@link min} and {@link max} value. If
 * the {@link integer} boolean is set to true, an integer is returned instead of
 * a float.
 */
function randomInRange(min, max, integer) {
    if(integer === true) {
        return Math.round(Math.random() * (max - min) + min);
    }
    return Math.random() * (max - min + 1) + min;
}

/**
 * Check that if two ranges overlap in one or more values.
 * @param {Number} x1 - The starting value of the first range (inclusive).
 * @param {Number} x2 - The ending value of the first range (inclusive).
 * @param {Number} u1 - The starting value of the second range (inclusive).
 * @param {Number} u2 - The ending value of the second range (inclusive).
 * @returns {bool} True if one value is shared in both ranges.
 */
function checkDeltaInRange(x1, x2, u1, u2) {
    return x1 <= u2 && u1 <= x2;
}

/**
 * Check if a {@link HTMLAudioElement} is playing.
 * @param {HTMLAudioElement} audio - The Audio element.
 * @returns {bool} True if it is playing.
 */
function isPlaying(audio) {
    return !audio.paused;
}

// helpers.js<js> ends here
