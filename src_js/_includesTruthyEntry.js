import forEach from './_forEach.js';

/**
 * The checking if the property with a truthy value exsist in the object.
 *
 * @private
 * @param {Object} obj The object in which the existence of property and value is checked.
 * @param {string} propName The name of property.
 * @returns {boolean} Returns boolean result of the checking.
 */

function includesTruthyEntry(obj, propName) {
  let result = false;
  if (typeof obj === 'object') {
    const keys = Object.keys(obj);
    forEach(keys, (key) => {
      if (key === propName && !!obj[key]) {
        result = true;
      }
    });
  }
  return result;
}

export default includesTruthyEntry;
