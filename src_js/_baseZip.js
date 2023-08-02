import mapArr from './_mapArr.js';
import forEach from './_forEach.js';

/**
 * @static
 * @category Array
 * @param {...Array} arrays The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 */

function baseZip(arr) {
  const arrLength = arr.length;
  const resultArrLength = Math.max(...mapArr(arr, (arrItem) => arrItem.length));
  const resutlArr = Array(resultArrLength);

  forEach(resutlArr, (_, resArrIndex) => {
    const subArr = Array(arrLength);
    forEach(subArr, (_, subArrIndex) => {
      subArr[subArrIndex] = arr[subArrIndex][resArrIndex]
    });
    resutlArr[resArrIndex] = subArr;
  });

  return resutlArr;
}

export default baseZip;
