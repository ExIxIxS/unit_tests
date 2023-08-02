import filterArr from './_filterArr.js';
import baseZip from './_baseZip.js';

/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 *
 * @static
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 */
function zip(...arrays) {
  const arr = filterArr(arrays, (item) => Array.isArray(item));

  if (!arr.length) {
    return [];
  }

  return baseZip(arr);

};

export default zip;
