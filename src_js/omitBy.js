import getObject from './_getObject';
import baseOmitBy from './_baseOmitBy';

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @category Object
 * @param {Object} obj The source object.
 * @param {Function} [predicate] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(obj, predicate) {
  if (!obj || !predicate) {
    return {};
  }

  const currentObj = getObject(obj);

  if (currentObj) {
    return baseOmitBy(currentObj, predicate);
  }

  return {};
}

export default omitBy;
