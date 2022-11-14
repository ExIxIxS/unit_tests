import mapArr from './_mapArr.js';
import isIterable from './_isIterable.js';
import arrayFrom from './_arrayFrom.js';

/**
 * Creates an array of values by running each element in `collection` thru
 * function. The function is invoked with three arguments:
 * (value, index|key, collection).
 *
 * @static
 * @category Collection
 * @param {Array|Object} coll The collection to iterate over.
 * @param {Function} fn The function or shorthand invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(coll, fn) {
  const collType = typeof coll;
  if (!coll || (collType !== "object" && !isIterable(coll))) {
    return [];
  }

  const arr = arrayFrom(coll);

  if (typeof fn === 'function' || !fn) {
    return mapArr(arr, fn)
  } else {
    return mapArr(arr, (item) => {
      if (typeof item === 'object') {
        return item[fn];
      }
    })
  }

}

export default map;
