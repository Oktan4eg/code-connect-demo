import React from 'react';
import response from './data.json';

function App() {
  console.log('users: ', response.data.users);
  console.log('images: ', response.data.images);
  console.log('coordinates: ', response.data.coordinates);
  console.log('price: ', response.data.price);

  return (
    <div className='App'>
      {response.data.users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
      {response.data.images.map((img) => (
        <h1>{img}</h1>
      ))}
      <p>
        {response.data.coordinates.x} {response.data.coordinates.y}
      </p>
      <p>
        <strong>{response.data.price}</strong>
      </p>
    </div>
  );
}

export default App;

// const url =
//   'https://gist.githubusercontent.com/Oktan4eg/eb478b6b5a5a7e46762e0708d84b9c3d/raw/fe1d3c239ec65c8bbe6cffa8cd32987f830042e8/sys-color-rgb.json';

// // let tm = new Date().getTime();
// const myRequest = new Request(url, {
//   method: 'GET',
//   rejectUnauthorized: false,
//   insecureHTTPParser: true,
//   mode: 'cors', // disable CORS because path does not contain http(s) (cors for http, no-cors for local file)
//   cache: 'default',
// });
// //const parseData = JSON.parse(myRequest);
// fetch(myRequest)
//   .then((data) => data.json())
//   .then((data) => console.log(data));

// let colorStyles = '';
// for (const [key, value] of Object.entries(figmaTree.styles)) {
//   if (key.styleType === 'name') colorStyles += ',' + key;
// }
// await getFigmaNodes(colorStyles, 'name');

// console.log(colorStyles);

// Object.entries('test.json').forEach(([key, value]) => {
//   console.log(Object.key);
//   // do something with key and val
// });

// async function getFigmaTree() {
//   let result = await fetch(
//     'https://gist.githubusercontent.com/Oktan4eg/eb478b6b5a5a7e46762e0708d84b9c3d/raw/fe1d3c239ec65c8bbe6cffa8cd32987f830042e8/sys-color-rgb.json',
//     {
//       method: 'GET',
//       // headers: {'X-Figma-Token': figmaToken},
//       mode: 'cors', // disable CORS because path does not contain http(s) (cors for http, no-cors for local file)
//     }
//   );
//   let figmaTree = await result.json();

//   let colorStyles = '';
//   for (const [key, value] of Object.entries(figmaTree.styles)) {
//     if (key.styleType === 'name') colorStyles += ',' + key;
//   }
//   await getFigmaNodes(colorStyles, 'name');

//   console.log(figmaTree);
// }
// getFigmaTree();

// async function getFigmaTree() {
//   let result = await fetch(
//     'https://gist.githubusercontent.com/Oktan4eg/eb478b6b5a5a7e46762e0708d84b9c3d/raw/fe1d3c239ec65c8bbe6cffa8cd32987f830042e8/sys-color-rgb.json',
//     {
//       method: 'GET',
//       // headers: {'X-Figma-Token': figmaToken},
//       mode: 'cors', // disable CORS because path does not contain http(s) (cors for http, no-cors for local file)
//     }
//   );
//   let figmaTree = await result.json();
//   let colorStyles = '',
//     textStyles = '';
//   for (const [key, value] of Object.entries(figmaTree.styles)) {
//     if (value.styleType === 'FILL') colorStyles += ',' + key;
//     if (value.styleType === 'TEXT') textStyles += ',' + key;
//   }
//   await getFigmaNodes(colorStyles, 'color');
//   await getFigmaNodes(textStyles, 'text');
// }
