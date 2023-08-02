import map from './map.js';
import filter from './filter.js';
import includes from './includes.js';

/**
 * @static
 * @param {Object} obj The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 */

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

export default baseOmit;
