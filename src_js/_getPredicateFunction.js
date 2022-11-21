import slice from './_slice.js';
import includesEntries from './_includesEntries.js';
import includesEntry from './_includesEntry.js';
import includesTruthyEntry from './_includesTruthyEntry.js';

function getPredicateFunction(predicate) {
  const predicateType = (Array.isArray(predicate)) ? 'array' : typeof predicate;

  switch(predicateType) {
    case 'function':
      return predicate;
    case 'object':
      return ((item) => includesEntries(item, predicate));
    case 'array': {
      const [key, value] = slice(predicate, 0, 2);
      return ((item) => includesEntry(item, key, value));
    }
    default:{
      if (predicate) {
        const key = predicate.toString();
        return ((item) => includesTruthyEntry(item, key));
      } else {
        return null;
      }
    }
  }
}

export default getPredicateFunction;
