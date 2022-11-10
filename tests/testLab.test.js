import * as _ from '../node_modules/lodash/lodash.js';
import _my from '../myLodash.js';

describe('chunk method', () => {
  const testSet = [
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: -1
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: 0
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: 1
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: 2
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: 3
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: 3.7
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: 10
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: '2'
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: Infinity
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: NaN
    },
    {
      arr: [1,2,3,4,5,6,7,8,9,10],
      size: undefined
    },
    {
      arr: [],
      size: 2
    },
    {
      arr: {
        name: 'John',
        age: 17,
        isMale: true
      },
      size: 2
    },
    {
      arr: 'string',
      size: 2
    },
    {
      arr: 12345678910,
      size: 2
    },
    {
      arr: undefined,
      size: 2
    },
    {
      arr: null,
      size: 2
    },
  ]

  testSet.forEach((testObj) => {
    test(`from [${testObj.arr}] with chunk size = ${testObj.size}`, () => {
    expect(_my.chunk(testObj.arr, testObj.size)).toEqual(_.chunk(testObj.arr, testObj.size));
    });
  })
});

describe('\ncompact method', () => {
  const testSet = [
    {
      arr: [1, 2, 3],
    },
    {
      arr: [],
    },
    {
      arr: 'string',
    },
    {
      arr: 123,
    },
    {
      arr: null,
    },
    {
      arr: undefined,
    },
  ]

  testSet.forEach((testObj) => {
    test(`.compact() for "${typeof testObj.arr}" -> "${testObj.arr}"`, () => {
    expect(_my.compact(testObj.arr)).toEqual(_.compact(testObj.arr));
    });
  })
});

describe('\ndrop method', () => {
  const testSet = [
    {
      arr: [1, 2, 3],
      num: undefined
    },
    {
      arr: [1, 2, 3],
      num: 2
    },
    {
      arr: [1, 2, 3],
      num: 5
    },
    {
      arr: [1, 2, 3],
      num: 0
    },
    {
      arr: 'string',
      num: 2
    },
    {
      arr: [1, 2, 3],
      num: 2.5
    },
    {
      arr: [1, 2, 3],
      num: -5
    },
    {
      arr: [1, 2, 3],
      num: NaN
    },
    {
      arr: 1234,
      num: 1
    },
    {
      arr: undefined,
      num: undefined
    },
  ]

  testSet.forEach((testObj) => {
    const arr = testObj.arr;
    const num = testObj.num;

    test(`.drop() for "${arr}" and num -> "${num}"`, () => {
    expect(_my.drop(arr, num)).toEqual(_.drop(arr, num));
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

describe('\ntake method', () => {
  const testSet = [
    {
      arr: [1, 2, 3],
      num: undefined
    },
    {
      arr: [1, 2, 3],
      num: 2
    },
    {
      arr: [1, 2, 3],
      num: 5
    },
    {
      arr: [1, 2, 3],
      num: 0
    },
    {
      arr: 'string',
      num: 2
    },
    {
      arr: [1, 2, 3],
      num: -5
    },
    {
      arr: [1, 2, 3],
      num: NaN
    },
    {
      arr: 1234,
      num: 1
    },
    {
      arr: undefined,
      num: undefined
    },
  ]

  testSet.forEach((testObj) => {
    const arr = testObj.arr;
    const num = testObj.num;

    test(`.take() for "${arr}" and num -> "${num}"`, () => {
    expect(_my.take(arr, num)).toEqual(_.take(arr, num));
    });
  })
});
