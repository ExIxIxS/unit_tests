import filter from './filter.js';

/**
 * @static
 * @category Object
 * @param {Object} obj The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */

function basePickBy(obj, fn) {
  const entries = Object.entries(obj);

  if (!fn) {
    return Object.fromEntries(entries);
  }

  if (typeof fn === 'function') {
    const validEntries = filter(entries, (subArr) => {
      const [key, value] = subArr;
      return (fn(value, key));
    });

    return Object.fromEntries(validEntries);
  }

  return {};
}

export default basePickBy;
