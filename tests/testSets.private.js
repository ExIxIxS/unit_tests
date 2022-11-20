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

const arrayFrom = [
  {
    item: [1, 2, 3, 4, 5],
    expected: [1, 2, 3, 4, 5],
  },
  {
    item: undefined,
    expected: [],
  },
  {
    item: null,
    expected: [],
  },
  {
    item: 0,
    expected: [0],
  },
  {
    item: { name: 'Stif', age: 17 },
    expected: ['Stif', 17],
  },
]

const filterArr = [
  {
    item: 404,
    fn: (item) => item > 0,
    expected: [],
  },
]

const findUsers = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true },
]

const findArr = [
  {
    arr: findUsers,
    fn: function(o) { return o.age < 40; },
    expected: { 'user': 'barney',  'age': 36, 'active': true }
  },
  {
    arr: findUsers,
    fn: function(o) { return o.age > 40; },
    expected: undefined
  },
  {
    arr: 404,
    fn: function(o) { return o.age > 40; },
    expected: undefined
  },
]

const includesEntries = [
  {
    obj1: null,
    obj2: 404,
    expected: false
  },
  {
    obj1: findUsers,
    obj2: findUsers,
    expected: true
  },
]

const includesEntry = [
  {
    obj: 404,
    key: 'a',
    value: 'string',
    expected: false
  },
]

const isObjectEqual = [
  {
    obj1: { 'a': 1, 'b': 2 },
    obj2: { 'c': 1, 'b': 2 },
    expected: false
  },
  {
    obj1: { 'a': 1, 'b': (item) => item > 0 },
    obj2: { 'a': 1, 'b': (item) => item < 0 },
    expected: false
  },
  {
    obj1: { 'a': 1, 'b': (item) => item > 0 },
    obj2: { 'a': 1, 'b': (item) => item > 0 },
    expected: false
  },
  {
    obj1: { 'a': 1, 'b': (item) => item > 0 },
    obj2: { 'a': 1, 'b': '(item) => item > 0' },
    expected: false
  },
  {
    obj1: { 'a': 1, 'b': '(item) => item > 0' },
    obj2: { 'a': 1, 'b': (item) => item > 0 },
    expected: false
  },
]

export default {
  slice,
  arrayFrom,
  filterArr,
  findArr,
  includesEntries,
  includesEntry,
  isObjectEqual,
}
