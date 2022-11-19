import * as _ from '../node_modules/lodash/lodash.js';

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
    from: -1
  },
  {
    coll: [1, 2, 3, 4, 5],
    value: 4,
    from: -3
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
  {
    coll: 3,
    value: 3,
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

const filterUsers = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false, 'props': ['array', 'of', ['arrays']] },
]

const filter = [
  {
    coll: filterUsers,
    fn: function(o) { return !o.active; }
  },
  {
    coll: filterUsers,
    fn: { 'age': 36, 'active': true }
  },
  {
    coll: filterUsers,
    fn: { 'age': 40 }
  },
  {
    coll: filterUsers,
    fn: { 'age': 36, 'user': 'Monika' }
  },
  {
    coll: filterUsers,
    fn: ['active', false]
  },
  {
    coll: filterUsers,
    fn: 'active'
  },
  {
    coll: filterUsers,
    fn: { 'age': 36, 'active': true, name: 'Stif' }
  },
  {
    coll: filterUsers,
    fn: ['active', false, 'age', 36]
  },
  {
    coll: filterUsers,
    fn: 'age'
  },
  {
    coll: filterUsers,
    fn: undefined
  },
  {
    coll: undefined,
    fn: undefined
  },
  {
    coll: 'string',
    fn: (char) => char === 'r'
  },
  {
    coll: {a: 2, b: 3, c: 'string'},
    fn: (item) => item.length > 2
  },
  {
    coll: filterUsers,
    fn: ['age', 36, 'active', false, ]
  },
  {
    coll: filterUsers,
    fn: { 'user': 'fred',   'age': 40, 'active': false, 'props': ['array', 'of', ['arrays']] }
  },
  {
    coll: filterUsers,
    fn: { 'user': 'fred',   'age': 40, 'active': false, 'props': ['wrong array'] }
  },
  {
    coll: filterUsers,
    fn: ['props', ['array', 'of', ['arrays']]]
  },
  {
    coll: filterUsers,
    fn: { 'user': 'fred',   'age': 40, 'active': false, isMale: true }
  },
  {
    coll: [
      {'10': 'Ten'}
    ],
    fn: 10
  },
  {
    coll: 10,
    fn: (num) => num === 10
  },
]

const findUsers = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true },
]

const find = [
  {
    coll: findUsers,
    fn: function(o) { return o.age < 40; }
  },
  {
    coll: findUsers,
    fn: { 'age': 1, 'active': true }
  },
  {
    coll: findUsers,
    fn: ['active', false]
  },
  {
    coll: findUsers,
    fn: 'active'
  },
  {
    coll: findUsers,
    fn: function(o) { return o.age < 40; },
    fromIndex: 1
  },
  {
    coll: 10,
    fn: undefined,
    fromIndex: undefined
  },
  {
    coll: [10, 20, 30, 40, 50],
    fn: (item) => item < 10
  },
  {
    coll: [10, 20, 30, 40, 50],
    fn: (item) => item > 10
  },
  {
    coll: [10, 20, 30, 40, 50],
    fn: (item) => item > 10,
    fromIndex: 2
  },
  {
    coll: 'string',
    fn: (item) => item === 'i'
  },
  {
    coll: 'string',
    fn: (item) => item === 'i',
    fromIndex: -4
  },
  {
    coll: undefined,
    fn: (item) => item === 'i',
    fromIndex: -4
  },
  {
    coll: findUsers,
    fn: undefined,
    fromIndex: -4
  },
  {
    coll: 'string',
    fn: (item) => item === 'i',
    fromIndex: 20
  },
  {
    coll: 'string',
    fn: (item) => item === 'i',
    fromIndex: -20
  },
  {
    coll: 10,
    fn: (item) => item <= 10
  },
  {
    coll: { 'a': 1, 'b': 2, 'c': 3, 'd': 4 },
    fn: (item) => item > 2
  },
  {
    coll: { 'a': 1, 'b': 2, 'c': 3, 'd': 4 },
    fn: (item) => item > 2,
    fromIndex: 3
  },
]

const dropWhileUsers = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true },
  { 'user': 'patrick', 'active': false },
  { 'user': 'stiven', 'active': true }
];

const dropWhile = [
  {
    arr: dropWhileUsers,
    predicate: function(o) { return !o.active; }
  },
  {
    arr: dropWhileUsers,
    predicate: { 'user': 'barney', 'active': false }
  },
  {
    arr: dropWhileUsers,
    predicate: ['active', false]
  },
  {
    arr: dropWhileUsers,
    predicate: 'active'
  },
  {
    arr: 'string',
    predicate: (char) => char !== 'i'
  },
  {
    arr: 'string',
    predicate: 'i'
  },
  {
    arr: dropWhileUsers,
    predicate: ['length', 1]
  },
  {
    arr: dropWhileUsers,
    predicate: undefined
  },
  {
    arr: 10,
    predicate: (item) => item < 100
  },
  {
    arr: undefined,
    predicate: undefined
  },
]

const slice = [
  {
    arr: [1, 2, 3, 4, 5],
    start: 0,
    end: 5
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 2,
    end: 5
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 5,
    end: 5
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: null,
    end: 5
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 3,
    end: 1
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: -3,
    end: undefined
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: -3,
    end: -5
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 0,
    end: -2
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 0,
    end: -6
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: -5,
    end: 3
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 10,
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 3,
    end: -3
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 1.3,
    end: -2.7
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 1.3,
    end: -2.2
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: undefined,
    end: undefined
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: '1',
    end: undefined
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: '1',
    end: '-2'
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: -10,
    end: '-2'
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: '0',
    end: -10
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: 1,
    end: 1
  },
  {
    arr: [1, 2, 3, 4, 5],
    start: -3,
    end: -3
  },
]

const pick = [
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    paths: ['a', 'c']
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    paths: ['a', 'c', 'd']
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    paths: 'c'
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    paths: 'ac'
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    paths: undefined
  },
  {
    obj: undefined,
    paths: ['a', 'c']
  },
  {
    obj: undefined,
    paths: undefined
  },
  {
    obj: { 'a': 1, '10': '2', 'c': 3 },
    paths: 10
  },
  {
    obj: 'string',
    paths: 2
  },
  {
    obj: '2',
    paths: '0'
  },
  {
    obj: [1, 2, 3, 4, 5],
    paths: 2
  },
  {
    obj: [1, 2, 3, 4, 5],
    paths: 'length'
  },
  {
    obj: 'string',
    paths: 'length'
  },
  {
    obj: { 'a': 1, 'b': null, 'c': 12, 'null': 0 },
    paths: ['a', 'b', 'c', null, 'd']
  },
  {
    obj: { 'a': 1, 'b': null, 'c': 12, 'null': 0 },
    paths: ['a', 'b', 'c', 'null', 'd']
  },
  {
    obj: { 'a': 1, 'c': 12, 'null': 0, null: null},
    paths: ['a', 'b', 'c', 'null', null]
  },
  {
    obj: null,
    paths: '0'
  },
]

const pickBy = [
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    predicate: _.isNumber
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3, 'd': 'dd', '2': 22, '3': 6},
    predicate: (value, key) => key + key === value
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    predicate: null
  },
  {
    obj: [1, 2, 4, 6, 8],
    predicate: (value, key) => key + 2 < value
  },
  {
    obj: 102,
    predicate: (value, key) => key === value
  },
  {
    obj: undefined,
    predicate: (value, key) => key + 2 < value
  },
  {
    obj: undefined,
    predicate: undefined
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    predicate: 'b'
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    predicate: '2'
  },
  {
    obj:'string',
    predicate: (value, key) => value === 'i'
  },
  {
    obj:'string',
    predicate: (value, key) => key === '3'
  },
  {
    obj: [1, 2, 4, 6, 8],
    predicate: undefined
  },
]

function FooToPairs() {
  this.a = 1;
  this.b = 2;
}

FooToPairs.prototype.c = 3;

const maptoPairs = new Map();

{
const keyString = 'a string';
const keyObj = {};
const keyFunc = function() {};


maptoPairs.set(keyString, "value associated with 'a string'");
maptoPairs.set(keyObj, 'value associated with keyObj');
maptoPairs.set(keyFunc, 'value associated with keyFunc');
maptoPairs.set(NaN, 'not a number')
maptoPairs.set(0, 'zero');
maptoPairs.set(1, 'one');
}

const toPairs = [
  {
    obj: new FooToPairs,
  },
  {
    obj: 'string',
  },
  {
    obj: ['a', 'r', 'r', 'a', 'y'],
  },
  {
    obj: ['array', ['of', ['arrays']]],
  },
  {
    obj: 404,
  },
  {
    obj: null,
  },
  {
    obj: undefined,
  },
  {
    obj: new Set('striiiiiing'),
  },
  {
    obj: maptoPairs,
  },
]

const omit = [
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    paths: ['a', 'c']
  },
  {
    obj: 'string',
    paths: ['1', '3']
  },
  {
    obj: 'string',
    paths: '3'
  },
  {
    obj: 'string',
    paths: 3
  },
  {
    obj: 'string',
    paths: [0, '1', 2, '3', 4,]
  },
  {
    obj: [0, '1', 2, '3', 4,],
    paths: [0, '1']
  },
  {
    obj: [0, '1', 2, '3', 4,],
    paths: 0
  },
  {
    obj: new Set('striiiiiing'),
    paths: '0'
  },
  {
    obj: new Set('striiiiiing'),
  },
  {
    obj: undefined,
    paths: ['a', 'c']
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    paths: undefined
  },
  {
    obj: 'string',
    paths: undefined
  },
  {
    obj: { 'a': 1, 'b': '2', 'c': 3 },
    paths: null
  },
  {
    obj: [0, '1', 2, '3', 4,],
    paths: undefined
  },
  {
    obj: [0, '1', 2, '3', 4,],
    paths: null
  },
  {
    obj: undefined,
    paths: undefined
  },
  {
    obj: maptoPairs,
    paths: NaN
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
  filter,
  find,
  dropWhile,
  slice,
  pick,
  pickBy,
  toPairs,
  omit,
}
