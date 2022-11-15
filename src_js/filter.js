import filterArr from './_filterArr.js';
import isIterable from './_isIterable.js';
import arrayFrom from './_arrayFrom.js';
import includesEntries from './_includesEntries.js';
import positiveSlice from './_slice.js';
import includesEntry from './_includesEntry.js';
import includesTruthyEntry from './_includesTruthyEntry.js';

/**
 * Iterates over elements of `collection`, returning a new array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @category Collection
 * @param {Iterable|Array|Object} coll The collection to iterate over.
 * @param {Function|Object|Array|string} [fn] The function/shorthand invoked per iteration.
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
function filter(coll, fn) {
  const collType = typeof coll;
  if (!coll || (collType !== "object" && !isIterable(coll))) {
    return [];
  }

  const arr = arrayFrom(coll);
  const fnType = (Array.isArray(fn)) ? 'array' : typeof fn;

  if (fnType === 'function' || !fn) {
    return filterArr(arr, fn)
  }

  switch(fnType) {
    case 'object': {
      return filterArr(arr, (item) => includesEntries(item, fn));
      }
      case 'array': {
        const [key, value] = positiveSlice(fn, 0, 2);
        return filterArr(arr, (item) => includesEntry(item, key, value));
      }
      default:{
        const key = fn.toString();
        return filterArr(arr, (item) => includesTruthyEntry(item, key));
      }
    }
  }

export default filter;
