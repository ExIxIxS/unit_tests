import mapArr from './_mapArr.js';
import arrayFrom from './_arrayFrom.js';
import isCollValid from './_isCollValid.js';
import getMapFunction from './_getMapFunction.js';

/**
 * Creates an array of values by running each element in `collection` thru
 * function. The function is invoked with three arguments:
 * (value, index|key, collection).
 *
 * @static
 * @category Collection
 * @param {Array|Object} coll The collection to iterate over.
 * @param {Function|Array|string} predicate The function/shorthand invoked per iteration.
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
function map(coll, predicate) {
  if (!isCollValid(coll)) {
    return [];
  }

  const arr = arrayFrom(coll);
  const  mapFunction = getMapFunction(predicate);

  return mapArr(arr, mapFunction);
}

export default map;
