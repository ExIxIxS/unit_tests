import forEach from './_forEach.js';

/**
 * The implementation of array filter.
 *
 * @private
 * @param {Array} arr The array to map.
 * @param {(item, index, arr) => any} fn map function.
 * @returns {Array} Returns the mapped array.
 */

function mapArr(arr, fn) {

  if (!fn) {
    return arr;
  }

  const resultArr = Array(arr.length);

  forEach(arr, (item, index, arr) => {
    resultArr[index] = fn(item, index, arr);
  });

  return resultArr;
}

export default mapArr;
