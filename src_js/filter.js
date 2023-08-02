import filterArr from './_filterArr.js';
import isIterable from './_isIterable.js';
import arrayFrom from './_arrayFrom.js';
import getPredicateFunction from './_getPredicateFunction.js';

/**
 * Iterates over elements of `collection`, returning a new array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @category Collection
 * @param {Iterable|Array|Object} coll The collection to iterate over.
 * @param {Function|Object|Array|string} [predicate] The function/shorthand invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 */
function filter(coll, predicate) {
  if (!isCollValid(coll)) {
    return [];
  }

  const arr = arrayFrom(coll);
  const filterFunction = getPredicateFunction(predicate);

  return filterArr(arr, filterFunction);
}

function isCollValid(coll) {
  return !(
    (typeof coll !== "object" && !isIterable(coll))
    || !coll
  );
}

export default filter;
