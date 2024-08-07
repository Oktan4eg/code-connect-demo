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

let variablesModeName: string;
let variablesColorName: string;
let variablesColorValue: string;
let variablesColor: Array<Colors>;

export function GetVariables() {
  const variablesName = variables[0].name;
  const variablesMode = variables[0].values;

  for (let i = 0; i < variablesMode.length; i++) {
    variablesModeName = variablesMode[i].mode.name;
    variablesColor = variables[0].values[i].color;
    // renderPalette(variablesModeName);

    // variablesColor какая-то странная конструкция

    for (let i = 0; i < variablesColor.length; i++) {
      variablesColorName = variablesColor[i].name;
      variablesColorValue = variablesColor[i].value;
      // renderColorBox(variablesColorName, variablesColorValue);
      console.log(variablesColorName + ' ' + variablesColorValue);

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
