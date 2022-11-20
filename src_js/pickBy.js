import getObject from './_getObject';
import basePickBy from './_basePickBy';

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @category Object
 * @param {Object} obj The source object.
 * @param {Function} [predicate] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(obj, predicate) {
  if (!obj) {
    return {};
  }

  let currentObj = getObject(obj);

  if (currentObj) {
    return basePickBy(currentObj, predicate);
  }

  return {};
}

export default pickBy;
