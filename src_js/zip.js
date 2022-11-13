import forEach from './_forEach.js';
import filterArr from './_filterArr.js';
import mapArr from './_mapArr.js';

/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 *
 * @static
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 */
function zip(...arrays) {
  const arr = filterArr(arrays, (item) => Array.isArray(item));
  const arrLength = arr.length;

  if (!arrLength) {
    return [];
  }

  const resultArrLength = Math.max(...mapArr(arr, (arrItem) => arrItem.length));
  const resutlArr = Array(resultArrLength);

  forEach(resutlArr, (resItem, resArrIndex) => {
    const subArr = Array(arrLength);
    forEach(subArr, (sumItem, subArrIndex) => {
      subArr[subArrIndex] = arr[subArrIndex][resArrIndex]
    });
    resutlArr[resArrIndex] = subArr;
  });

  return resutlArr;
};

export default zip;
