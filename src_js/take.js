import positiveSlice from './_positiveSlice.js';

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @category Array
 * @param {Array} arr The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(arr, n = 1) {
  if (!arr || isNaN(n)) {
    return [];
  }

  const sliceEnd = (n < arr.length) ? Math.floor(n) : arr.length;
  return positiveSlice(arr, 0, sliceEnd);
}

export default take;
