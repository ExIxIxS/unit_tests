import filter from './filter.js';
import map from './map';
import getObject from './_getObject';

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

function basePick(obj, paths) {
  const pathsArr = (Array.isArray(paths)) ? paths : [paths.toString()];
  const mappedEntries = map(pathsArr, (pathKey) => {
    return [pathKey, obj[pathKey]];
  });

  const validEntries = filter(mappedEntries, (subArr) => {
    const value = subArr[1];
    return (value !== undefined);
  });

  return Object.fromEntries(validEntries);
}

export default pick;
