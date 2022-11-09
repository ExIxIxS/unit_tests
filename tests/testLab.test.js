const _ = require('lodash');
const myLodash = require('../myLodash');

describe('chunk method', () => {
  testSet = [
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

