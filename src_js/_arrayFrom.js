import isIterable from './_isIterable.js';

/**
 * The custom implementation Arroy.from().
 *
 * @private
 * @param {any} item The item to array.
 * @returns {Array} Returns the array.
 */

function arrayFrom(item) {
  const itemType = typeof item;
  const isValIter = isIterable(item);

  if (itemType !== 'object' && !isValIter) {
    return [item];
  }

  if (!item) {
    return [];
  }

  if (Array.isArray(item)) {
    return item;
  }

  if (isValIter || Object.hasOwn(item, 'length')) {
    return Array.from(item);
  }

  return Object.values(item);
}

export default arrayFrom;
