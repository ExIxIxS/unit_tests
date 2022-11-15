import isObjectEqual from './_isObjectEqual.js';
import forEach from './_forEach.js';

/**
 * The checking if property and value exsist in the object.
 *
 * @private
 * @param {Object} obj The object in which the existence of property and value is checked.
 * @param {string} key The name of property.
 * @param {any} value The property value.
 * @returns {boolean} Returns boolean result of the checking.
 */

function includesEntry(obj, key, value) {
  let result = false;
  if (typeof obj === 'object') {
    const entriesArr = Object.entries(obj);
    forEach(entriesArr, (subArr) => {
      const [subKey, subValue] = subArr;
      if (key === subKey && isObjectEqual(value, subValue)) {
        result = true;
      }
    })
  }
  return result;
}

export default includesEntry;
