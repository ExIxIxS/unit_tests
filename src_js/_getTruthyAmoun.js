import forEach from './_forEach.js';

/**
 * Getting an amount of truthy items in the array.
 *
 * @private
 * @param {Array} arr
 * @returns {number} Returns an amount of truthy items.
*/

function getTruthyAmoun (arr) {
  let result = 0;

  forEach(arr, (item) => {
    if (!!item) {
      result += 1;
    }
  });

  return result;
}

export default getTruthyAmoun;
