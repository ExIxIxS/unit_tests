import slice from './_slice.js';

/**
 * Iterates over elements of array, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection)
 *
 * @private
 * @param {Array} arr The array to find.
 * @param {(item, index, arr) => boolean} fn The predicate function.
 *  @param {number} [fromIndex=0] The index to search from.
 * @returns {any} Returns the first element predicate returns truthy for.
 */

function findArr(arr, fn, fromIndex = 0) {
  const isArray = Array.isArray(arr);
  if (isArray && fn) {
    const currentArr = (fromIndex) ? slice(arr, fromIndex) : arr;
    let index = 0;
    for (const item of currentArr) {
      if (fn(item, index, currentArr)) {
        return item;
      }
      index++;
    }
  }

  if (isArray && !fn) {
    return slice(arr, fromIndex)[0];
  }
}

export default findArr;
