const chunk = [
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

const compact = [
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

const drop = [
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

const take = [
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

const includes = [
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

const zip = [
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

const mapTestFunc = (n) => n * n;
const map = [
  {
    coll: [4, 8, 3],
    fn: mapTestFunc
  },
  {
    coll: { 'a': 4, 'b': 8 },
    fn: mapTestFunc
  },
  {
    coll: { 'a': 4, 'b': 8, 'c': 'string' },
    fn: mapTestFunc
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
    fn: mapTestFunc
  },
  {
    coll: null,
    fn: mapTestFunc
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
    fn: mapTestFunc
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
    fn: mapTestFunc
  },
  {
    coll: { 0: 0, 1: 1, 2: 2, length: 3 },
    fn: mapTestFunc
  },

  {
    coll: { name: 'Stif', age: 17, 2: 2, length: 3 },
    fn: mapTestFunc
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
    fn: mapTestFunc
  },
]

export default {
  chunk,
  compact,
  drop,
  take,
  includes,
  zip,
  map,
}
