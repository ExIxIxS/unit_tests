import slice from './_slice.js';

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @category Array
 * @param {Array} arr The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */

function chunk(arr, size = 1) {
  if (!arr) {
    return [];
  }

  const arrLength = arr.length;
  const minChunkSize = 1;
  const intSize = Math.floor(+size);

  if (intSize < minChunkSize
    || !arrLength
    || Number.isNaN(intSize)) {
    return [];
  }

  const chunkSize = (intSize <= arrLength) ? intSize: arrLength;
  const resultLength = Math.ceil(arrLength / chunkSize);
  const resultArr = Array(resultLength);
  let sliceStart = 0;

  for (let index = 0; index < resultLength; index++) {
    const sliceEnd = sliceStart + chunkSize
    resultArr[index] = slice(arr, sliceStart, sliceEnd);
    sliceStart = sliceEnd;
  }

  return resultArr;
}

export default chunk;
