import { readFileSync, writeFileSync } from 'fs';

//читаем

const data = readFileSync('variables.json');

let dataObj = JSON.parse(data);
//console.table(dataObj);
console.log(dataObj.values[1]);

//парсим
// let lightTheme = dataObj;

// записываем джсон
// writeFileSync('./build/j-test.js', JSON.stringify(dataObj), {
//   encoding: 'utf8',
//   flag: 'w',
// });
// console.log(lightTheme);

// const keys = Object.keys(dataObj);

// keys.forEach((key, index) => {
//   //console.log(key + ':', dataObj[key]);
// });
