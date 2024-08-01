// fetch(
//   'https://gist.githubusercontent.com/Oktan4eg/eb478b6b5a5a7e46762e0708d84b9c3d/raw/9c1455ad96f16eaf1e44484042824f93b754e5c8/sys-color-hex.json'
// )
fetch('variables.json')
  .then((response) => response.json())
  .then((data) => showInfo(data));

function showInfo(data) {
  console.table(data);
}
