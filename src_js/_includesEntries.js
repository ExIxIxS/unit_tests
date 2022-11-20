import isObjTypesValid from './_isObjTypesValid.js';
import baseIncludesEntries from './_baseIncludesEntries.js';

/**
 * The checking if all properties and values of one object are in another object.
 *
 * @private
 * @param {Object} obj1 The object in which the existence of properties and values is checked.
 * @param {Object} obj2 The object with checked properties.
 * @returns {boolean} Returns boolean result of the checking.
 */

function includesEntries(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (!isObjTypesValid(obj1, obj2)) {
    return false;
  }

  return baseIncludesEntries(obj1, obj2);
}

export default includesEntries;
