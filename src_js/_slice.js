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
    || isNaN(start)
    || isNaN(end)) {
    return [];
  }

  const length = arr.length;
  const currentStart = getStart(start, length);
  const currentEnd = getEnd(end, length);

  if (currentStart > currentEnd) {
    return [];
  }

  return baseSlice(arr, currentStart, currentEnd);
}

function getStart(start, length) {
  let currentStart = Math.floor(start);

  if (currentStart < 0) {
    currentStart = (-currentStart < length) ? currentStart += length : 0;
  } else {
    currentStart = (currentStart < length) ? currentStart : length;
  }

  return currentStart;
}

function getEnd(end, length) {
  let currentEnd = Math.ceil(end);

  if (currentEnd < 0 && (-currentEnd <= length)) {
    currentEnd += length;
  } else {
    currentEnd = (currentEnd < length) ? currentEnd : length;
  }

  return currentEnd;
}

function baseSlice(arr, start, end) {
  const resultLength = end - start;
  const resultArr = Array(resultLength);

  for (let index = 0; index < resultLength; index++) {
    const srcArrIndex = index + start;
    resultArr[index] = arr[srcArrIndex];
  }

  return resultArr;
}

export default slice;
