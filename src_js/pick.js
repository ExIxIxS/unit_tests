import getObject from './_getObject';
import basePick from './_basePick';

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */

function pick(obj, paths) {
  if (!obj || paths === undefined) {
    return {};
  }

  let currentObj = getObject(obj);

  if (currentObj) {
    return basePick(currentObj, paths);
  }

  return {};
}

export default pick;
