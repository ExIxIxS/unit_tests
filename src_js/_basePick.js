import filter from './filter.js';
import map from './map';

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */

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

export default basePick;
