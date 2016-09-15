/* exported ERRORS */

/**
 * @fileOverview This file contains custom errors.
 * @author etienne(etienne@ThinkPax)
 * @name errors.js<js>
 * @license GPLv3
 * Created: 2016-09-15
 */

/**
 * Creates user-defined exceptions
 * @returns {Function} The constructor.
 */
var CustomError = (function() {
    'use strict';

    function CustomError(message) {
        // Enforces new (prevent 'this' be the global scope)
        if (!(this instanceof CustomError)) {
            return new CustomError(message);
        }

        var i, error, len;

        // Builds the message with multiple arguments
        message = message || 'An exception occurred';
        for (i = 1, len = arguments.length; i < len; i += 1) {
            message = message.replace(new RegExp('\\{' + (i - 1) + '}'), arguments[i]);
        }
        // Store the exception stack
        error = new Error(message);

        // Access to CustomError.prototype.name
        error.name = this.name;

        // Set the properties of the instance in order to reflect an Error
        // object
        Object.defineProperties(this, {
            'stack': {
                enumerable: false,
                // Retrieves the stack trace
                get: function() {
                  return error.stack;
                }
            },
            'message': {
                enumerable: false,
                value: message
            }
        });
    }

    // Creates the prototype and prevents the direct reference to Error.prototype
    CustomError.prototype = Object.create(Error.prototype);
    // Not used new Error() here because the exception would be generated now,
    // and we need set the exception when the new instance is created.

    Object.defineProperties(CustomError.prototype, {
        // Fixes the constructor (ES5)
        'constructor': {
            configurable: false,
            enumerable: false,
            writable: false,
            value: CustomError
        },
        'name': {
            configurable: false,
            enumerable: false,
            writable: false,
            value: 'JSU Error'
        }
    });

    // Returns the constructor
    return CustomError;
}());
// End closure

/**
 * Custom error when arguments contain invalid types.
 */
var WrongTypeArgs = new CustomError('Wrong type of arguments');

/**
 * Custom error when a function misses at least one argument.
 */
var WrongNumberArgs = new CustomError('Wrong number of arguments');

/**
 * Custom error when a resource can’t be reached. It’s most likely a network,
 * but could also be a wrong URL.
 */
var UnreachableResource = new CustomError('The resource is unreachable');

/**
 * Custom error when a passed module namespace {@link Object} is not void.
 */
var NamespaceNotVoid = new CustomError('The module namespace is not void');


// errors.js<js> ends here
