import drop from './drop.js';
import isIterable from './_isIterable.js';
import arrayFrom from './_arrayFrom.js';
import slice from './_slice.js';
import includesEntries from './_includesEntries.js';
import includesEntry from './_includesEntry.js';
import includesTruthyEntry from './_includesTruthyEntry.js';

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
  const collType = typeof coll;

  if (!(coll && (collType === "object" || isIterable(coll)) && predicate)) {
    return []
  }

  const arr = arrayFrom(coll);
  const fn = getPredicateFunction(predicate);
  const length = arr.length;
  let dropIndex = 0;
  let index = 0;

  while (fn(arr[index], index, arr) && index < length) {
    dropIndex++;
    index++;
  }

  return drop(arr, dropIndex);
}

function getPredicateFunction(predicate) {
  const predicateType = (Array.isArray(predicate)) ? 'array' : typeof predicate;

  switch(predicateType) {
    case 'function':
      return predicate;
    case 'object':
      return ((item) => includesEntries(item, predicate));
    case 'array': {
      const [key, value] = slice(predicate, 0, 2);
      return ((item) => includesEntry(item, key, value));
    }
    default:{
      if (predicate) {
        const key = predicate.toString();
        return ((item) => includesTruthyEntry(item, key));
      } else {
        return null;
      }
    }
  }
}

export default dropWhile;
