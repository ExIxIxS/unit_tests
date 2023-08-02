import isIterable from './_isIterable.js'
import getTruthyAmoun from './_getTruthyAmoun.js'
import forEach from './_forEach.js'

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @category Array
 * @param {Array} arr The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */

function compact(arr) {
  if (!isIterable(arr)) {
    return [];
  }

  const resultLength = getTruthyAmoun(arr);
  const resultArr = Array(resultLength);
  let resArrIndex = 0;

  forEach(arr, (item) => {
    if (!!item) {
      resultArr[resArrIndex] = item;
      resArrIndex++;
    }
  });

  return resultArr;
}

export default compact;
