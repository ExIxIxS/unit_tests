import baseFilterArr from './_baseFilterArr.js';

/**
 * The implementation of array filter.
 *
 * @private
 * @param {Array} arr The array to filter.
 * @param {(item, index, arr) => boolean} fn Filter function.
 * @returns {Array} Returns the filtered array.
 */

function filterArr(arr, fn) {
  if (!Array.isArray(arr)) {
    return [];
  }

  if (!fn) {
    return arr;
  }

  return baseFilterArr(arr, fn);
}

export default filterArr;
