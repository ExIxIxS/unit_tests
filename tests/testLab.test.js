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

/*
describe('\ndropWhile method', () => {
  const users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true },
    { 'user': 'patrick', 'active': false },
    { 'user': 'stiven', 'active': true }
  ];

  const testSet = [
    {
      arr: users,
      predicate: function(o) { return !o.active; }
    },
    {
      arr: users,
      predicate: { 'user': 'barney', 'active': false }
    },
    {
      arr: users,
      predicate: ['active', false]
    },
    {
      arr: users,
      predicate: ['barney', 'fred', 'pebbles']
    },
  ]

  testSet.forEach((testObj) => {
    const arr = testObj.arr;
    const predicate = testObj.predicate;

    test(`.dropWhile() for predicate "${predicate}"`, () => {
    expect(_my.dropWhile(arr, predicate)).toEqual(_.dropWhile(arr, predicate));
    });
  })
});
*/
