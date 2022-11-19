import getObject from './_getObject';
import map from './map.js';
import filter from './filter.js';
import includes from './includes';
/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @param {Object} obj The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
function omit(obj, paths) {
  if (!obj) {
    return {};
  }

  const currentObj = getObject(obj);

  if (currentObj) {
    return baseOmit(currentObj, paths);
  }

  return {};
}

function baseOmit(obj, paths) {
  const entries = Object.entries(obj);

  if (paths === undefined || paths === null) {
    return Object.fromEntries(entries);
  }

  const pathsArr = (Array.isArray(paths)) ? paths : [paths];
  const mappedPaths = map(pathsArr, (item) => item.toString());

  const validEntries = filter(entries, (subArr) => {
    const key = subArr[0];
    return (!includes(mappedPaths, key));
  });

  return Object.fromEntries(validEntries);
}

export default omit;
