import forEach from './_forEach.js';

/**
 * Iterates over elements of array, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection)
 *
 * @private
 * @param {Array} arr The array to find.
 * @param {(item, index, arr) => boolean} fn Predicate function or shorthand.
 * @returns {any} Returns the first element predicate returns truthy for.
 */

function findArr(arr, fn) {
  if (!Array.isArray(arr)) {
    return [];
  }

  if (!fn) {
    return arr;
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

export default findArr;
