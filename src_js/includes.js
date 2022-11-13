import forEach from './_forEach.js';
import positiveSlice from './_positiveSlice.js';

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 *
 * @static
 * @category Collection
 * @param {Array|Object|string} coll The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(coll, value, fromIndex = 0) {
  let result = false;
  let type = typeof coll;

  if (type !== 'string' && type !== 'object') {
    return result;
  }

  if (type === 'string') {
    return coll.includes(value, fromIndex);
  }

  const arr = (Array.isArray(coll)) ? coll : Object.values(coll);
  const slicedArr = positiveSlice(arr, fromIndex);

  forEach(slicedArr, (item) => {
    if (item === value) {
      result = true;
    }
  })

  return result;
}

export default includes;
