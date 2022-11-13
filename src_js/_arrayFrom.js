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

  let resultArr;
  if (isValIter || Object.hasOwn(item, 'length')) {
    resultArr = Array.from(item);
  }

  if (Array.isArray(item)) {
    resultArr = item;
  }

  if (itemType === 'object' && !resultArr)  {
    resultArr = Object.values(item);
  }

  return resultArr;
}

export default arrayFrom;
