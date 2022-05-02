/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */

export const capitalizeString = (string) =>
  string.split(' ').map((item) => `${item[0].toUpperCase()}${item.slice(1, item.length)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */

export function fenceString(string) {
  let arr = string.split('');

  let result = arr.map(function (item, i) {
    if (i % 2 === 0) {
      return item.toLowerCase();
    } else {
      return item.toUpperCase();
    }
  });

  return result.join('');
}

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */

export const reducerIf = function (action, string) {
  if (action === 'uppercase') {
    return string.toUpperCase();
  } else if (action === 'lowercase') {
    return string.toLowerCase();
  } else if (action === 'fence') {
    let arr = string.split('');
    let result = arr.map(function (item, i) {
      if (i % 2 === 0) {
        return item.toLowerCase();
      } else {
        return item.toUpperCase();
      }
    });

    return result.join('');
  } else if (action === 'capitalize') {
    let arr = string.split(' ');
    let result = arr.map((item) => {
      return `${item[0].toUpperCase()}${item.slice(1, item.length)}`;
    });

    return result.join(' ');
  } else {
    return string;
  }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */

export const reducerSwitch = (action, string) => {
  switch (action) {
    case 'uppercase':
      return string.toUpperCase();
      break;
    case 'lowercase':
      return string.toLowerCase();
      break;
    case 'fence':
      {
        let arr = string.split('');
        let result = arr.map(function (item, i) {
          if (i % 2 === 0) {
            return item.toLowerCase();
          } else {
            return item.toUpperCase();
          }
        });

        return result.join('');
      }
      break;
    case 'capitalize':
      {
        let arr = string.split(' ');

        let result = arr.map((item) => {
          return `${item[0].toUpperCase()}${item.slice(1, item.length)}`;
        });

        return result.join(' ');
      }
      break;
    default:
      return string;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
  for (const item of string) {
    console.log(item);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
  let i = 0;
  while (i < string.length) {
    console.log(string[i]);
    i++;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
  string.split('').forEach((item) => console.log(item));
};
