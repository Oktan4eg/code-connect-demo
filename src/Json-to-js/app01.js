import { readFileSync, writeFileSync } from 'fs';

//читаем

const data = readFileSync('variables.json');

//парсим
let dataObj = JSON.parse(data);
let lightTheme = dataObj;

// записываем джсон
// writeFileSync('./build/j-test.js', JSON.stringify(dataObj), {
//   encoding: 'utf8',
//   flag: 'w',
// });
// console.log(lightTheme);

const keys = Object.keys(dataObj);
//console.log(keys);
//console.table(data.keys('name'));

//  [ 'java', 'javascript', 'nodejs', 'php' ]

keys.forEach((key, index) => {
  console.log(key + ':', dataObj[key]);
});
