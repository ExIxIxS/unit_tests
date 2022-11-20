/**
 * @private
 * @param {Object} obj1 The first object.
 * @param {Object} obj2 The second object.
 * @returns {boolean} Returns boolean result of the checking.
 */

function isObjTypesValid(obj1, obj2) {
  return !(typeof obj1 !== 'object'
  || typeof obj2 !== 'object'
  || obj1 == null
  || obj2 == null)
}

export default isObjTypesValid;