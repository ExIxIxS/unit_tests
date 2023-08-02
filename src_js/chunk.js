import isChunkSizeValid from './_isChunkSizeValid.js';
import baseChunk from './_baseChunk.js';

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

  if (!isChunkSizeValid(arr, size)) {
    return [];
  }

  return baseChunk(arr, size);
}

export default chunk;
