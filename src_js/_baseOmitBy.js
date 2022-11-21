import filter from './filter.js';

/**
 * @static
 * @category Object
 * @param {Object} obj The source object.
 * @param {Function} [predicate] The function invoked per property.
 * @returns {Object} Returns the new object.
 */

function baseOmitBy(obj, fn) {
  const entries = Object.entries(obj);

  if (typeof fn === 'function') {
    const validEntries = filter(entries, (subArr) => {
      const [key, value] = subArr;
      return (!fn(value, key));
    });

    return Object.fromEntries(validEntries);
  }

  return Object.fromEntries(entries);
}

export default baseOmitBy;
