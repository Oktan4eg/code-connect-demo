import { GetVariablesBox } from './ColorBoxType';
import { GetVariablesTheme } from './ColorTheme';
import variables from './variables.json';
// import './style.css';

export function GetVariables() {
  const Variables = variables[0].values;
  return (
    <div>
      {Variables.map((variable, i) => {
        return (
          <>
            <GetVariablesTheme name={variable.mode.name} />
            {Variables[i].color.map((color) => {
              // ColorName(
              //   '--' + color.name.replace(/\//g, '-') + ': ',
              //   color.value
              // );
              return (
                <GetVariablesBox
                  name={'--' + color.name.replace(/\//g, '-') + ': '}
                  value={color.value}
                />
              );
            })}
          </>
        );
      })}
    </div>
  );
}

// -------------

// import { GetVariablesBox } from './getVariablesBox';
// import variables from './variables.json';

// export function GetVariables() {
//   const Variables = variables[0].values;
//   return (
//     <div>
//       {Variables.map((variable, i) => {
//         return (
//           <div key={i}>
//             <h3>Theme: {variable.mode.name}</h3>
//             {Variables[i].color.map((color, i2) => {
//               // ColorName(
//               //   '--' + color.name.replace(/\//g, '-') + ': ',
//               //   color.value
//               // );
//               return (
//                 <div key={i2}>
//                   <GetVariablesBox
//                     name={'--' + color.name.replace(/\//g, '-') + ': '}
//                     value={color.value}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
