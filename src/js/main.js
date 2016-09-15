/* global isFunction */
/* jshint unused:false */
/**
 * @fileOverview This file contains helper functions not related to a
 * specific project.
 * @name helpers.js<js>
 * @author Etienne Prud’homme
 * @license GPLv3
 * Created: 2016-09-15
 */

/**
 * Capitalize the first letter of a {@link String}
 * @param {String} string - The {@linkcode String} to capitalize the first letter.
 * @returns {String} A new {@linkcode String} where the first character is in uppercase.
 */
function capitalizeString(string) {
    return string.charAt(0).toLocaleUpperCase() + string.slice(1);
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
 * Generate a random property and check if it is present in
 * {@link obj} (in that case it starts again).
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
