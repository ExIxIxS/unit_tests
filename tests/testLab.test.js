import * as _ from '../node_modules/lodash/lodash.js';
import myLodash from '../myLodash.js';

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
    expect(myLodash.chunk(testObj.arr, testObj.size)).toEqual(_.chunk(testObj.arr, testObj.size));
    });
  })
});

describe('compact method', () => {
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
    expect(myLodash.compact(testObj.arr)).toEqual(_.compact(testObj.arr));
    });
  })
});

describe('drop method', () => {
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
    test(`.drop() for "${testObj.arr}" and num -> "${testObj.num}"`, () => {
    expect(myLodash.drop(testObj.arr)).toEqual(_.drop(testObj.arr));
    });
  })
});
