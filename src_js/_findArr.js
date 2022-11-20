import slice from './_slice.js';
import baseFindArr from './_baseFindArr.js';

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
  if (Array.isArray(arr)) {
    if (fn) {
      return baseFindArr(arr, fn, fromIndex);
    }

    return slice(arr, fromIndex)[0];
  }
}

export default findArr;
