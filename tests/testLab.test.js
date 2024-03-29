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

describe('\ndropWhile method', () => {
  const methodName = 'dropWhile';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;
    const fn = testObj.predicate;

    test(`.${methodName}() for predicate "${fn}"`, () => {
    expect(_my[methodName](arr, fn)).toEqual(_[methodName](arr, fn));
    });
  })
});

describe('\npick method', () => {
  const methodName = 'pick';

  testSets[methodName].forEach((testObj) => {
    const obj = testObj.obj;
    const paths = testObj.paths;

    test(`.${methodName}() for ${obj} with paths "${paths}"`, () => {
    expect(_my[methodName](obj, paths)).toEqual(_[methodName](obj, paths));
    });
  })
});

describe('\npickBy method', () => {
  const methodName = 'pickBy';

  testSets[methodName].forEach((testObj) => {
    const obj = testObj.obj;
    const fn = testObj.predicate;

    test(`.${methodName}() for ${obj} with predicate "${fn}"`, () => {
    expect(_my[methodName](obj, fn)).toEqual(_[methodName](obj, fn));
    });
  })
});

describe('\ntoPairs method', () => {
  const methodName = 'toPairs';

  testSets[methodName].forEach((testObj) => {
    const obj = testObj.obj;

    test(`.${methodName}() for ${obj}`, () => {
    expect(_my[methodName](obj)).toEqual(_[methodName](obj));
    });
  })
});

describe('\nomit method', () => {
  const methodName = 'omit';

  testSets[methodName].forEach((testObj) => {
    const obj = testObj.obj;
    const paths = testObj.paths;

    test(`.${methodName}() for ${obj} with paths ${paths}`, () => {
    expect(_my[methodName](obj, paths)).toEqual(_[methodName](obj, paths));
    });
  })
});

describe('\nomitBy method', () => {
  const methodName = 'omitBy';

  testSets[methodName].forEach((testObj) => {
    const obj = testObj.obj;
    const fn = testObj.predicate;

    test(`.${methodName}() for ${obj} with predicate "${fn}"`, () => {
      expect(_my[methodName](obj, fn)).toEqual(_[methodName](obj, fn));
    });
  })
});

describe('\nmerge method', () => {
  const methodName = 'merge';

  testSets[methodName].forEach((testObj) => {
    const obj = testObj.obj;
    const src = testObj.sources;

    test(`.${methodName}() for ${obj} with source "${src}"`, () => {
      expect(_my[methodName](obj, src)).toEqual(_[methodName](obj, src));
    });
  })
});
