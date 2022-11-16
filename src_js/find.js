import findArr from './_findArr.js';
import isIterable from './_isIterable.js';
import arrayFrom from './_arrayFrom.js';
import slice from './_slice.js';
import includesEntries from './_includesEntries.js';
import includesEntry from './_includesEntry.js';
import includesTruthyEntry from './_includesTruthyEntry.js';

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static

 * @category Collection
 * @param {Array|Object} coll The collection to inspect.
 * @param {Function|Object|Array|string} fn The predicate function/shorthand.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */

function find(coll, fn, fromIndex = 0) {
  const collType = typeof coll; //object
  const fnType = (Array.isArray(fn)) ? 'array' : typeof fn; //undefined

  if (coll && (collType === "object" || isIterable(coll))) {
    const arr = arrayFrom(coll);

    switch(fnType) {
      case 'function': {
        return findArr(arr, fn, fromIndex);
      }
      case 'object': {
        return findArr(arr, (item) => includesEntries(item, fn), fromIndex);
      }
      case 'array': {
        const [key, value] = slice(fn, 0, 2);
        return findArr(arr, (item) => includesEntry(item, key, value), fromIndex);
      }
      default:{
        if (fn) {
          const key = fn.toString();
          return findArr(arr, (item) => includesTruthyEntry(item, key), fromIndex);
        } else {
          return findArr(arr, null, fromIndex);
        }
      }
    }
  }

};

export default find;
