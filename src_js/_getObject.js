import isIterable from './_isIterable.js';
import arrayFrom from './_arrayFrom';

function getObject(value) {
  if (typeof value === 'object') {
    return value;
  }

  if (isIterable(value)) {
    return arrayFrom(value);
  }
}

export default getObject;
