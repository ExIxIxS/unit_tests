import * as _ from '../node_modules/lodash/lodash.js';
import _my from '../myLodash.js';
import testSets from './testSets.js';

describe(`chunk method`, () => {
  const methodName = 'chunk';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;
    const size = testObj.size

    test(`.${methodName}() for [${arr}] with chunk size = ${size}`, () => {
    expect(_my[methodName](arr, size)).toEqual(_[methodName](arr, size));
    });
  })
});


describe(`\ncompact method`, () => {
  const methodName = 'compact';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;

    test(`.${methodName}() for "${typeof arr}" -> "${arr}"`, () => {
    expect(_my[methodName](arr)).toEqual(_[methodName](arr));
    });
  })
});


describe(`\ndrop method`, () => {
  const methodName = 'drop';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;
    const num = testObj.num;

    test(`.${methodName}() for "${arr}" and num -> "${num}"`, () => {
    expect(_my[methodName](arr, num)).toEqual(_[methodName](arr, num));
    });
  })
});


describe(`\ntake method`, () => {
  const methodName = 'take';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;
    const num = testObj.num;

    test(`.${methodName}() for "${arr}" and num -> "${num}"`, () => {
    expect(_my[methodName](arr, num)).toEqual(_[methodName](arr, num));
    });
  })
});


describe('\nincludes method', () => {
  const methodName = 'includes';

  testSets[methodName].forEach((testObj) => {
    const coll = testObj.coll;
    const value = testObj.value;
    const from = testObj.from;

    test(`.${methodName}() for "${coll}", value -> "${value}", from index -> "${from}"`, () => {
    expect(_my[methodName](coll, value, from)).toEqual(_[methodName](coll, value, from));
    });
  })
});

describe('\nzip method', () => {
  const methodName = 'zip';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;

    test(`.${methodName}() for [${arr}]`, () => {
    expect(_my[methodName](...arr)).toEqual(_[methodName](...arr));
    });
  })
});


describe('\nmap method', () => {
  const methodName = 'map';

  testSets[methodName].forEach((testObj) => {
    const coll = testObj.coll;
    const fn = testObj.fn;

    test(`.${methodName}() for ${coll}`, () => {
    expect(_my[methodName](coll, fn)).toEqual(_[methodName](coll, fn));
    });
  })
});

describe('\nfilter method', () => {
  const methodName = 'filter';

  testSets[methodName].forEach((testObj) => {
    const coll = testObj.coll;
    const fn = testObj.fn;

    test(`.${methodName}() for ${coll}
      fn -> ${fn}`, () => {
    expect(_my[methodName](coll, fn)).toEqual(_[methodName](coll, fn));
    });
  })
});

describe('\nslice method', () => {
  const methodName = 'slice';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;
    const start = testObj.start;
    const end = testObj.end;

    test(`.${methodName}() for ${arr}
      start -> ${start}
      end -> ${end}`, () => {
    expect(_my[methodName](arr, start, end)).toEqual(_[methodName](arr, start, end));
    });
  })
});


describe('\nfind method', () => {
  const methodName = 'find';

  testSets[methodName].forEach((testObj) => {
    const coll = testObj.coll;
    const fn = testObj.fn;
    const fromIndex = testObj.fromIndex;

    test(`.${methodName}() for ${coll}
      predicate -> ${fn}
      fromIndex -> ${fromIndex}`, () => {
    expect(_my[methodName](coll, fn, fromIndex)).toEqual(_[methodName](coll, fn, fromIndex));
    });
  })
});


/*
describe('\ndropWhile method', () => {
  const methodName = 'dropWhile';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;
    const predicate = testObj.predicate;

    test(`.${methodName}() for predicate "${predicate}"`, () => {
    expect(_my[methodName](arr, predicate)).toEqual(_[methodName](arr, predicate));
    });
  })
});
*/
