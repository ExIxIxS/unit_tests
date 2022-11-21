import forEach from './_forEach.js';
import isObjTypesValid from './_isObjTypesValid.js';
import includes from './includes.js';

/**
 * The deep comparing two objects.
 *
 * @private
 * @param {Object} obj1 The first object.
 * @param {Object} obj2 The second object.
 * @returns {boolean} Returns boolean result of the comparing.
 */

 function isObjectEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (!isObjTypesValid(obj1, obj2)) {
    return false;
  }

  return baseObjectEqualCheck(obj1, obj2);
}

function baseObjectEqualCheck(obj1, obj2) {
  const keysA = Object.keys(obj1);
  const keysB = Object.keys(obj2);

  if (keysA.length !== keysB.length) {
    return false;
  }

  let result = true;

  forEach(keysA, (key) => {
    if (!includes(keysB, key)) {
      result = false;
    }

    if (typeof obj1[key] === 'function'|| typeof obj2[key] === 'function') {
      if (obj1[key].toString() !== obj2[key].toString()) {
        result = false;
      }
    }

    if (!isObjectEqual(obj1[key], obj2[key])) {
      result = false;
    }
  });

  return result;
}

export default isObjectEqual;
