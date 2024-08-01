для начала тебе понадобится дернуть дерево фигмы полностью
12:00
async function getFigmaTree() {
  let result = await fetch('https://api.figma.com/v1/files/' + figmaFile, {
    method: 'GET',
    headers: {'X-Figma-Token': figmaToken},
  });
  let figmaTree = await result.json();
  console.log(figmaTree)
}
12:00
figmaFile - это твой файл
12:00
figmaToken - это токен который тебе надо сгенерировать в настройках
12:01
Сердобинцев Александр Викторович
для этого еще мне токен нужо получить, почитаю сегдодня где взять
12:01
ага вот я про него
12:01
Абдрашитов Павел Радикович
сейчас не знаю изменилось ли что, но раньше токен можно было только через веб-версию получить
12:01
Сердобинцев Александр Викторович
да эт я разберусь
12:01
Давай пошагово сделаем :) чтоб тебе все сразу не пришлось описывать. 
1 шаг понятен в целом, после созвонов попробую подключить. 
2 шаг? распарсить файл вытянув нужное?
12:03
Абдрашитов Павел Радикович
после того как будет в консольку выводиться JSON с фигмой можно расширить скрипт и выделить отдельно стили. У меня это соответственно ноды которые соодержат FILL и TEXT
12:03
async function getFigmaTree() {
  let result = await fetch('https://api.figma.com/v1/files/' + figmaFile, {
    method: 'GET',
    headers: {'X-Figma-Token': figmaToken},
  });
  let figmaTree = await result.json();
  let colorStyles = '',
    textStyles = '';
  for (const [key, value] of Object.entries(figmaTree.styles)) {
    if (value.styleType === 'FILL') colorStyles += ',' + key;
    if (value.styleType === 'TEXT') textStyles += ',' + key;
  }
  await getFigmaNodes(colorStyles, 'color');
  await getFigmaNodes(textStyles, 'text');
}
12:03
ну и соответственно асинхронные функции по FILL и TEXT:
12:03
также подключаемся к API и дергаем все ID-s нод которые нам нужны
12:04
async function getFigmaNodes(ids, type) {
  let id = ids.replace(',', '');
  let result = await fetch(
    'https://api.figma.com/v1/files/' + figmaFile + '/nodes?ids=' + id,
    {
      method: 'GET',
      headers: {
        'X-Figma-Token': figmaToken,
      },
    },
  );
  let figmaNode = await result.json();
  const colorNodes = [];
  const textNodes = [];
  for (const [, value] of Object.entries(figmaNode.nodes)) {
    if (type === 'color') colorNodes.push(value.document);
    if (type === 'text') textNodes.push(value.document);
  }
  if (colorNodes.length) createColorVariables(colorNodes);
  if (textNodes.length) createTextVariables(textNodes);
}
12:04
в конце соответственно идут функции по записи всего этого добра в файлы:
12:04
Сердобинцев Александр Викторович
Я пока не понимаю что такое "асинхронные" :) скорее всего на этом этапе венусь к тебе с вопросиками, но ясно станет как покручу
12:05
Абдрашитов Павел Радикович
const createColorVariables = (nodes) => {
  let data = '/* АВТОМАТИЧЕСКАЯ ГЕНЕРАЦИЯ. НЕ ПРАВИТЬ! */\n\n :root {\n';
  nodes.forEach((item) => {
    if (item.visible === false) return;
    if (item.fills[0].color) {
      let name = item.name.replace(/[\W_]+/g, '-');
      if (name.slice(-1) === '-') name = name.slice(0, -1);
      let cA = item.fills[0].color.a;
      if (item.fills[0].opacity)
        cA = Math.round(item.fills[0].opacity * 100) / 100;
      let cR = Math.round(item.fills[0].color.r * 255);
      let cG = Math.round(item.fills[0].color.g * 255);
      let cB = Math.round(item.fills[0].color.b * 255);
      data +=
        '--' + name + ': rgba(' + cR + ',' + cG + ',' + cB + ',' + cA + ');\n';
    }
  });
  data += '}';
  const file = fs.createWriteStream('packages/resources/css/colorVars.css');
  file.write(data);
  file.end();
};
12:05
const createTextVariables = (nodes) => {
  let data = '/* АВТОМАТИЧЕСКАЯ ГЕНЕРАЦИЯ. НЕ ПРАВИТЬ! */\n\n :root {\n';
  nodes.forEach((item) => {
    if (item.visible === false) return;
    let name = item.name.replace(/[\W_]+/g, '-');
    if (name.slice(-1) === '-') name = name.slice(0, -1);
    data +=
      '--' +
      name +
      ': ' +
      item.style.fontWeight +
      ' ' +
      item.style.fontSize +
      'px/' +
      item.style.lineHeightPx +
      'px "' +
      item.style.fontFamily +
      '", sans-serif;\n';
  });
  data += '}';
  const file = fs.createWriteStream('packages/resources/css/textVars.css');
  file.write(data);
  file.end();
};
12:05
Сердобинцев Александр Викторович
ага, те ты мне весь путь описал? буду крутить!
12:05
Абдрашитов Павел Радикович
ну и потом остается только дернуть первую функцию чтобы начал выполняться весь скрипт
12:06
getFigmaTree().then((r) => console.log(r));
12:06
соответственнно в начале скрипта тебе понадобится указать используемые либы и токен / файл фигмы
const fetch = (...args) =>
  import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const figmaToken = '';
const figmaFile = '';
12:07
вот пожалуй и вся магия )
12:07
Сердобинцев Александр Викторович
Данное сообщение удалено
12:07
Абдрашитов Павел Радикович
getFigmaTree().then((r) => console.log(r));
тут я дергаю функцию и что-то вывожу в консоль? (then -- это то что функция хранит?)
12:07
Абдрашитов Павел Радикович
Абдрашитов Павел Радикович
async function getFigmaTree() { let result = await fetch('https://api.figma.com/v1/files/' + figmaFile, { method: 'GET', headers: {'X-Figma-Token': figmaToken}, }); let figmaTree = await result.json(); console.log(figmaTree) }
вот на этом этапе можешь посмотреть что тебе будет в консольке выдавать в figmaTree может там чего и поинтереснее наковыряешь чем только FILL и TEXT
12:07
Вы
тут я дергаю функцию и что-то вывожу в консоль? (then -- это то что функция хранит?)
нет, по сути можно и не выводить ничего, но линтер ругается что мы дернули асинхронную функцию и не использовали then )))
Палец вверх
12:08
поэтому тупо вывели в консоль
12:08
Сердобинцев Александр Викторович
и это ты именно стили дергал?
12:09

смотри, у фигмы появились вариейблс и там есть настройки
12:09
я так понимаю по этим признакам тоже можно их делить/дергать
12:10
ну это я уже поизучаю
12:10
Абдрашитов Павел Радикович
может и можно =) поэтому советую начать тебе с первого шага и там уже смотреть что конкретно ты можешь вытащить из figmaTree
12:10
Сердобинцев Александр Викторович
спасибо дружище, как будет с чем вернуться -- припрусь :)
Рукопожатие
12:10
Абдрашитов Павел Радикович
принцип для всего един - дернули дерево, посмотрели какие объекты нас интересуют (ноды), и с ID этих объектов уже повторно дрючим фигму
12:10
вот дерево подгрузить чтобы выбрать нужные ноды из него fetch('https://api.figma.com/v1/files/' + figmaFile
12:11
а здесь уже конкретные ноды по ID (через запятую) запрашиваем fetch(
    'https://api.figma.com/v1/files/' + figmaFile + '/nodes?ids=' + id