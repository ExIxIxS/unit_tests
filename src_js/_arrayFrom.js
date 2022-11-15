import isIterable from './_isIterable.js';

/**
 * The custom implementation Arroy.from().
 *
 * @private
 * @param {any} item The item to array.
 * @returns {Array} Returns the array.
 */

function arrayFrom(item) {
  if (!item) {
    return [];
  }

  const itemType = typeof item;
  const isValIter = isIterable(item);

  if (itemType !== 'object' && !isValIter) {
    return [item];
  }

  if (Array.isArray(item)) {
    return item;
  }

  if (isValIter || Object.hasOwn(item, 'length')) {
    return Array.from(item);
  }

  if (itemType === 'object')  {
    return Object.values(item);
  }
}

export default arrayFrom;
