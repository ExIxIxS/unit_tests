import drop from './drop.js';
import isIterable from './_isIterable.js';
import arrayFrom from './_arrayFrom.js';
import getPredicateFunction from './_getPredicateFunction.js';

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @static
 * @category Array
 * @param {Array} coll The array to query.
 * @param {Function|Object|Array|string} [predicate] The function/shorthand invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.dropWhile(users, function(o) { return !o.active; });
 * // => objects for ['pebbles']
 *
 * // The `_.matches` iteratee shorthand.
 * _.dropWhile(users, { 'user': 'barney', 'active': false });
 * // => objects for ['fred', 'pebbles']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.dropWhile(users, ['active', false]);
 * // => objects for ['pebbles']
 *
 * // The `_.property` iteratee shorthand.
 * _.dropWhile(users, 'active');
 * // => objects for ['barney', 'fred', 'pebbles']
 */

function dropWhile(coll, predicate) {
  if (!isArgsValid(coll, predicate)) {
      return []
  }

  const arr = arrayFrom(coll);
  const fn = getPredicateFunction(predicate);
  const dropIndex = getDropIndex(arr, fn);

  return drop(arr, dropIndex);
}

function isArgsValid(coll, predicate) {
  return (coll
    && predicate
    && (typeof coll === "object" || isIterable(coll))
  )
}

function getDropIndex(arr, fn) {
  const length = arr.length;
  let index = 0;
  let dropIndex = 0;

  while (fn(arr[index], index, arr) && index < length) {
    dropIndex++;
    index++;
  }

  return dropIndex;
}

export default dropWhile;
