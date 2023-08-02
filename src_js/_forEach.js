/**
 * Appling fn for each item.
 *
 * @private
 * @param {Iterable} iter
 * @param {(item, index: number, iter) => void} fn
 */

function forEach (iter, fn) {
  let index = 0;
  for (let item of iter) {
    fn(item, index, iter)
    index++;
  }
}

export default forEach;
