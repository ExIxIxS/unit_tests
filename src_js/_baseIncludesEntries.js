import includes from './includes.js';
import isObjectEqual from './_isObjectEqual.js';
import forEach from './_forEach.js';

/**
 * @private
 * @param {Object} obj1 The object in which the existence of properties and values is checked.
 * @param {Object} obj2 The object with checked properties.
 * @returns {boolean} Returns boolean result of the checking.
 */

function baseIncludesEntries(obj1, obj2) {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  let checkResult = true;

  forEach(keysObj2, (key) => {
    if (includes(keysObj1, key)) {
      if (!isObjectEqual(obj1[key], obj2[key])) {
        checkResult = false;
      }
    } else {
      checkResult = false;
    }
  })

  return checkResult;
}

export default baseIncludesEntries;