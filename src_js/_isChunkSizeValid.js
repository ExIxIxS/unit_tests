/**
 * @static
 * @category Array
 * @param {Array} arr The array to process.
 * @param {number} size The length of each chunk
 * @returns {boolean} Returns the result of checking.
 *
 */

function isChunkSizeValid(arr, size) {
  const arrLength = arr.length;
  const minChunkSize = 1;
  const intSize = Math.floor(+size);

  return !(intSize < minChunkSize
    || !arrLength
    || Number.isNaN(intSize)
  );
}

export default isChunkSizeValid;
