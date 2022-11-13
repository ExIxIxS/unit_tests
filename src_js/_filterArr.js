import forEach from './_forEach.js';

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

  let resultLength = 0;
  forEach(arr, (item, index, arr) => {
    if (fn(item, index, arr)) {
      resultLength++;
    }
  });

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

export default filterArr;
