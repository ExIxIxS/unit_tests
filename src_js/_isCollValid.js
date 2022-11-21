import isIterable from './_isIterable.js';

/**
 * @private
 */

function isCollValid(coll) {
  return coll && (typeof coll === "object" || isIterable(coll));
}

export default isCollValid;