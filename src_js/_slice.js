/**
 * The base implementation of `slice`.
 *
 * @private
 * @param {Array} arr The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

function slice(arr, start = 0, end = arr.length) {
  if (!arr
    || start > end
    || isNaN(start)
    || isNaN(end)) {
    return [];
  }

  const length = arr.length;
  const currentStart = (start < 0) ? 0 : Math.floor(start);
  const currentEnd = (end >= length) ? length : Math.floor(end);

  const resultLength = currentEnd - currentStart;
  const resultArr = Array(resultLength);

  for (let index = 0; index < resultLength; index++) {
    const srcArrIndex = index + currentStart;
    resultArr[index] = arr[srcArrIndex];
  }

  return resultArr;
}

export default slice;
