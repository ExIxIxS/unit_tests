import slice from './_slice.js';

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * **Note:** : Guaranteed arguments passing.
 *
 * @static
 * @category Array
 * @param {Array} arr The array to process.
 * @param {number} size The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 */

function baseChunk(arr, size) {
  const arrLength = arr.length;
  const intSize = Math.floor(+size);
  const chunkSize = (intSize <= arrLength) ? intSize: arrLength;
  const resultLength = Math.ceil(arrLength / chunkSize);
  const resultArr = Array(resultLength);

  for (let index = 0, sliceStart = 0; index < resultLength; index++) {
    const sliceEnd = sliceStart + chunkSize;
    resultArr[index] = slice(arr, sliceStart, sliceEnd);
    sliceStart = sliceEnd;
  }

  return resultArr;
}

export default baseChunk;
