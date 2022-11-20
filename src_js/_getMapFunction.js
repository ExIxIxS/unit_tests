/**
 *
 * @private
 * @param {Function|Array|string} predicate The predicate to function.
 * @returns {Array} Returns the function for map method.
 */

function getMapFunction(predicate) {
  return (typeof predicate === 'function' || !predicate)
    ? predicate
    : (item) => {
      if (typeof item === 'object') {
        return item[predicate];
      };
    };
}

export default getMapFunction;