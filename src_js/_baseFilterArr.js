import forEach from './_forEach.js';

/**
 * The implementation of array filter with guaranteed argument passing.
 *
 * @private
 * @param {Array} arr The array to filter.
 * @param {(item, index, arr) => boolean} fn Filter function.
 * @returns {Array} Returns the filtered array.
 */

function baseFilterArr(arr, fn) {
  const resultLength = getFilteredLength(arr, fn);
  const resultArr = Array(resultLength);
  let resArrIndex = 0;

  forEach(arr, (item, index, arr) => {
    if (fn(item, index, arr)) {
      resultArr[resArrIndex] = item;
      resArrIndex++;
    }
  });

  return resultArr;
}

function getFilteredLength(arr, fn) {
  let resultLength = 0;
  forEach(arr, (item, index, arr) => {
    if (fn(item, index, arr)) {
      resultLength++;
    }
  });

  return resultLength;
}

export default baseFilterArr;