import { ColorVariablesBox } from './ColorVariablesBox';
import { ColorVariables } from './ColorVariables';
import { ColorVariablesBox2 } from './ColorVariablesBox2';
import { GetVariables } from './getVariables0';
import { GetVariables2 } from './getVariables2';
GetVariables2();

export function ColorVariablesTable2() {
  return (
    <div>
      <div>
        <button>lightTheme</button>
        <button>darkTheme</button>
      </div>
      {ColorVariables.map((t) => {
        return <ColorVariablesBox2 name={t.name} value={t.value} var={t.var} />;
      })}
    </div>
  );
}
