/**
 * The base implementation of `slice` with positive start and end only.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

function positiveSlice(arr, start = 0, end = arr.length) {
  if (start > end) {
    return [];
  }

  const length = arr.length;
  const currentStart = (start < 0) ? 0 : start;
  const currentEnd = (end > length) ? length : end;

  const resultLength = currentEnd - currentStart;
  const resultArr = Array(resultLength);
  for (let index = 0; index < resultLength; index++) {
    const srcArrIndex = index + start;
    resultArr[index] = arr[srcArrIndex];
  }

  return resultArr;
}

export default positiveSlice;
