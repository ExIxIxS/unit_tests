/**
 * Simple Iterable check.
 *
 * @private
 * @param {any} input.
 * @returns {boolean} Returns if input is Iterable.
 */

function isIterable(input) {
  if (input === null || input === undefined) {
    return false
  }

  return typeof input[Symbol.iterator] === 'function'
}

export default isIterable;
