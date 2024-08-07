import { ColorVariablesBox2 } from './ColorVariablesBox2';
import variables from './variables.json';
//import { ColorVariablesBox2 } from './ColorVariablesBox2';
import { ColorType } from './ColorVariablesBox2';

export let ColorVariables: Array<ColorType> = [];

// export type ColorVariablesMode = {
//   name: string;
//   color: string;
//   values?: Modes[];
// };
// type Modes = {
//   mode: any;
//   color: Colors[];
//   number: Numbers[];
//   string: Strings[];
// };
type Colors = {
  name: string;
  value: string;
  var: string;
  rootAlias: string;
};
// type Numbers = {
//   name: string;
//   value: string;
//   var: string;
//   rootAlias: string;
// };
// type Strings = {
//   name: string;
//   value: string;
//   var: string;
//   rootAlias: string;
// };

let variablesName = variables[0].name;
let variablesMode = variables[0].values;
let variablesModeName: string;
let variablesColor: Colors[];
let variablesColorName: string;
let variablesColorValue: string;

export function GetVariables() {
  for (let i = 0; i < variablesMode.length; i++) {
    variablesModeName = variablesMode[i].mode.name;
    variablesColor = variables[0].values[i].color;
    // renderPalette(variablesModeName);

    // variablesColor какая-то странная конструкция

    for (let i = 0; i < variablesColor.length; i++) {
      variablesColorName = variablesColor[i].name;
      variablesColorValue = variablesColor[i].value;
      // renderColorBox(variablesColorName, variablesColorValue);
      // console.log(variablesColorName + ' ' + variablesColorValue);
      testName();
      // return (
      //   <div>
      //     <ColorVariablesBox2
      //       name={variablesColorName}
      //       color={variablesColorValue}
      //     />
      //   </div>
      // );

      // console.log(
      //   variablesModeName +
      //     ' / ' +
      //     variablesName +
      //     ' — ' +
      //     variablesColorName +
      //     ' — ' +
      //     variablesColorValue +
      //     '   --   ' +
      //     i
      // );
    }
  }
}

function testName() {
  console.log(variablesColorName + ' ———————— ' + variablesColorValue);
  <div>Hello TestName</div>;
}
