import {
  fenceString,
  consoleLoggerWordsSplit,
  consoleLoggerWordsWhile,
  consoleLoggerWordsForOf,
  consoleLoggerWordsFor,
  reducerIf,
  capitalizeString,
} from './index.js';


console.log(capitalizeString('test test test')); // Test Test Test

console.log(fenceString('Hi all to all and all')); // hI AlL To aLl aNd aLl

console.log(reducerIf('uppercase', 'string')); // STRING
console.log(reducerIf('lowercase', 'STRing')); // string
console.log(reducerIf('fence', 'string')); // sTrInG
console.log(reducerIf('capitalize', 'test test')); // Test Test
console.log(reducerIf('bla', 'string')); // string

consoleLoggerWordsForOf('test');
// t
// e
// s
// t

consoleLoggerWordsFor('test');
// t
// e
// s
// t

consoleLoggerWordsWhile('test');
// t
// e
// s
// t

consoleLoggerWordsSplit('test');
// t
// e
// s
// t




