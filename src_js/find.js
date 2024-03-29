import findArr from './_findArr.js';
import arrayFrom from './_arrayFrom.js';
import getPredicateFunction from './_getPredicateFunction.js';
import isCollValid from './_isCollValid.js';


/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static

 * @category Collection
 * @param {Array|Object} coll The collection to inspect.
 * @param {Function|Object|Array|string} predicate The predicate function/shorthand.
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

function find(coll, predicate, fromIndex = 0) {
  if (isCollValid(coll)) {
    const arr = arrayFrom(coll);
    const findFunction = getPredicateFunction(predicate);

    return findArr(arr, findFunction, fromIndex);
  }

};

export default find;
