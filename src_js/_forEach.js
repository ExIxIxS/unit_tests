/**
 * Appling fn for each item.
 *
 * @private
 * @param {Iterable} arr
 * @param {(item) => void} fn
 */

function forEach (arr, fn) {
  for (let item of arr) {
    fn(item)
  }
}

export default forEach;
