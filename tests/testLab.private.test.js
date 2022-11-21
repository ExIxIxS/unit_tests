import * as _ from '../node_modules/lodash/lodash.js';
import _my from '../_myLodash.js';
import testSets from './testSets.private.js';

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

describe('\narrayFrom method', () => {
  const methodName = 'arrayFrom';

  testSets[methodName].forEach((testObj) => {
    const item = testObj.item;
    const expected = testObj.expected;

    test(`.${methodName}() for ${item}`, () => {
    expect(_my[methodName](item)).toEqual(expected);
    });
  })
});

describe('\nfilterArr', () => {
  const methodName = 'filterArr';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;
    const fn = testObj.fn;
    const expected = testObj.expected;

    test(`.${methodName}() for ${arr}`, () => {
    expect(_my[methodName](arr, fn)).toEqual(expected);
    });
  })
});

describe('\nfindArr', () => {
  const methodName = 'findArr';

  testSets[methodName].forEach((testObj) => {
    const arr = testObj.arr;
    const fn = testObj.fn;
    const expected = testObj.expected;

    test(`.${methodName}() for ${arr}`, () => {
    expect(_my[methodName](arr, fn)).toEqual(expected);
    });
  })
});

describe('\nincludesEntries', () => {
  const methodName = 'includesEntries';

  testSets[methodName].forEach((testObj) => {
    const obj1 = testObj.obj1;
    const obj2 = testObj.obj2;
    const expected = testObj.expected;

    test(`.${methodName}()`, () => {
    expect(_my[methodName](obj1, obj2)).toEqual(expected);
    });
  })
});

describe('\nincludesEntry', () => {
  const methodName = 'includesEntry';

  testSets[methodName].forEach((testObj) => {
    const obj = testObj.obj;
    const key = testObj.key;
    const value = testObj.value;
    const expected = testObj.expected;

    test(`.${methodName}()`, () => {
    expect(_my[methodName](obj, key, value)).toEqual(expected);
    });
  })
});

describe('\nisObjectEqual', () => {
  const methodName = 'isObjectEqual';

  testSets[methodName].forEach((testObj) => {
    const obj1 = testObj.obj1;
    const obj2 = testObj.obj2;
    const expected = testObj.expected;

    test(`.${methodName}()`, () => {
    expect(_my[methodName](obj1, obj2)).toEqual(expected);
    });
  })
});
