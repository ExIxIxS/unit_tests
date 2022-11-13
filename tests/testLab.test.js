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
      arr: [0, 1, false, '3', '', undefined, NaN, 7, null, 'false', 11, 'null'],
    },
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
      num: 2.2
    },
    {
      arr: [1, 2, 3],
      num: 2.5
    },
    {
      arr: [1, 2, 3],
      num: 2.7
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
      arr: [1, 2, 3],
      num: 'string'
    },
    {
      arr: 1234,
      num: 1
    },
    {
      arr: {name: 'Stif', age: 17, isMale: false},
      num: 2
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
      arr: [1, 2, 3],
      num: 2.3
    },
    {
      arr: [1, 2, 3],
      num: 2.5
    },
    {
      arr: [1, 2, 3],
      num: 2.7
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
      arr: NaN,
      num: 2
    },
    {
      arr: 1234,
      num: 1
    },
    {
      arr: {name: 'Stif', age: 17, isMale: false},
      num: 2
    },
    {
      arr: undefined,
      num: undefined
    },
    {
      arr: [1, 2, 3],
      num: 'string'
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

describe('\nincludes method', () => {
  const testSet = [
    {
      coll: [1, 2, 3],
      value: 1,
      from: undefined
    },
    {
      coll: [1, 2, 3],
      value: 1,
      from: 2
    },
    {
      coll: [1, 2, 3, 4, 5],
      value: 1,
      from: 1.7
    },
    {
      coll: [1, 2, 3, 4, 5],
      value: 3,
      from: 1.7
    },
    {
      coll: [1, 2, 3, 4, 5],
      value: 4,
      from: 10
    },
    {
      coll: [1, 2, 3, 4, 5],
      value: 4,
      from: -10
    },
    {
      coll: [1, 2, 3, 4, 5],
      value: 4,
      from: Infinity
    },
    {
      coll: {a: 1, b: 2},
      value: 1,
      from: undefined
    },
    {
      coll: {a: 1, b: 2, c: 3},
      value: 1,
      from: 1
    },
    {
      coll: 'string',
      value: 'trin',
      from: undefined
    },
    {
      coll: 213,
      value: 1,
      from: undefined
    },
    {
      coll: 'string',
      value: NaN,
      from: undefined
    },
    {
      coll: 'string',
      value: 'trin',
      from: 3
    },
    {
      coll: 'string',
      value: 'in',
      from: 3
    },
    {
      coll: 'string',
      value: undefined,
      from: undefined
    },
    {
      coll: undefined,
      value: undefined,
      from: undefined
    },
  ]

  testSet.forEach((testObj) => {
    const coll = testObj.coll;
    const value = testObj.value;
    const from = testObj.from;

    test(`.includes() for "${coll}", value -> "${value}", from index -> "${from}"`, () => {
    expect(_my.includes(coll, value, from)).toEqual(_.includes(coll, value, from));
    });
  })
});

describe('\nzip method', () => {
  const testSet = [
    {
      arr: [['a', 'b'], [1, 2], [true, false]],
    },
    {
      arr: [['a', 'b', 'c'], [1, 2], [true, false]],
    },
    {
      arr: [['a', 'b', 'c'], [1, 2, 3, 4, 5], [true, false]],
    },
    {
      arr: [['a', 'b', 'c']],
    },
    {
      arr: ['string', [1, 2], [true, false]],
    },
    {
      arr: ['string', [1, 2], 3, [true, false], ['string', 'string', 'string']],
    },
    {
      arr: ['string'],
    },
    {
      arr: [123],
    },
    {
      arr: [],
    },
    {
      arr: [NaN],
    },
    {
      arr: [{a: 1, b: 2, c: 3}],
    },
    {
      arr: [undefined],
    },
  ]

  testSet.forEach((testObj) => {
    const arr = testObj.arr;

    test(`.zip() for [${arr}]`, () => {
    expect(_my.zip(...arr)).toEqual(_.zip(...arr));
    });
  })
});

describe('\nmap method', () => {
  const testFunc = (n) => n * n;

  const testSet = [
    {
      coll: [4, 8, 3],
      fn: testFunc
    },
    {
      coll: { 'a': 4, 'b': 8 },
      fn: testFunc
    },
    {
      coll: { 'a': 4, 'b': 8, 'c': 'string' },
      fn: testFunc
    },
    {
      coll: [
        { 'user': 'barney' },
        { 'user': 'fred' }
      ],
      fn: 'user'
    },
    {
      coll: [
        { 1: 'one' },
        { '1': 'one' },
        { 'user': 'fred' }
      ],
      fn: 1
    },
    {
      coll: [
        { 'user': 'barney', age: 17 },
        { 'isMale': true },
        { 'admin': 'barney', age: 17 },
        14,
        'string',
        undefined
      ],
      fn: 'user'
    },
    {
      coll: undefined,
      fn: undefined
    },
    {
      coll: [4, 8, 3],
      fn: undefined
    },
    {
      coll: undefined,
      fn: testFunc
    },
    {
      coll: null,
      fn: testFunc
    },
    {
      coll: null,
      fn: 'user'
    },
    {
      coll: [
        { 'user': 'barney' },
        10,
        { 'user': 'fred' }
      ],
      fn: testFunc
    },
    {
      coll: { 'a': 4, 'b': 8 },
      fn: 3
    },
    {
      coll: 'string',
      fn: (char) => char + char
    },
    {
      coll: 3,
      fn: testFunc
    },
    {
      coll: { 0: 0, 1: 1, 2: 2, length: 3 },
      fn: testFunc
    },

    {
      coll: { name: 'Stif', age: 17, 2: 2, length: 3 },
      fn: testFunc
    },
    {
      coll: { name: 'Stif', age: 17, 2: 2, length: 3 },
      fn: 'length'
    },
    {
      coll: [1, 2, 3, 4],
      fn: 'length'
    },
    {
      coll: { 'a': 4, 'b': 8, 6: 'John' },
      fn: testFunc
    },
  ]

  testSet.forEach((testObj) => {
    const coll = testObj.coll;
    const fn = testObj.fn;

    test(`.map() for ${coll}`, () => {
    expect(_my.map(coll, fn)).toEqual(_.map(coll, fn));
    });
  })
});
