const isEmpty = function (string) {
  return string === '';
}

const squareRoots = function (number) {
  return Math.sqrt(number);
}

const isOdd = function (number) {
  return number % 2 !== 0;
}

const odds = function (number) {
  return isOdd(number) ? number : '';
}

const halves = function (number) {
  return number / 2;
}

const isLongerThanLimit = function (string, limit) {
  return string.length > limit;
}

const longStrings = function (string) {
  return isLongerThanLimit(string, 5) ? string : '';
}

const capitalised = function (string) {
  return string.toUpperCase();
}

const removeEmpty = function (list) {
  const result = [];
  
  for (const element of list) {
    if (!isEmpty(element)) {
      result.push(element);
    }
  }

  return result;
}

const containsEmpty = function (list) {
  return list.indexOf('') > -1;
}

const getEvaluatedList = function (operation, list) {
  const result = [];

  for (const element of list) {
    const value = operation(element);
    result.push(value);
  }
  
  return containsEmpty(result) ? removeEmpty(result) : result;
}

const numbers = [1, 4, 25];
const strings = ["impossible", "possible", "no"];

console.log('Square roots:\n', getEvaluatedList(squareRoots, numbers));
console.log('Odds:\n', getEvaluatedList(odds, numbers));
console.log('Halves:\n', getEvaluatedList(halves, numbers));
console.log('Long strings:\n', getEvaluatedList(longStrings, strings));
console.log('Capitalise:\n', getEvaluatedList(capitalised, strings));
