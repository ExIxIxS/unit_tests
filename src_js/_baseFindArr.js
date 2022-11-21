import slice from './_slice.js';

/**
 * !NOTE: Guaranteed arguments passing.
 *
 * @private
 * @param {Array} arr The array to find.
 * @param {(item, index, arr) => boolean} fn The predicate function.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {any} Returns the first element predicate returns truthy for.
 */


function baseFindArr(arr, fn, fromIndex) {
  const currentArr = (fromIndex) ? slice(arr, fromIndex) : arr;
    let index = 0;
    for (const item of currentArr) {
      if (fn(item, index, currentArr)) {
        return item;
      }
      index++;
    }
}

export default baseFindArr;