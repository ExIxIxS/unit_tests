import slice from './_slice.js';

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @category Array
 * @param {Array} arr The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */

function drop(arr, n = 1) {
  if (!arr) {
    return [];
  }

  const sliceStart = (n > 0 && !isNaN(n)) ? Math.floor(n) : 0;

  return slice(arr, sliceStart);
}

export default drop;