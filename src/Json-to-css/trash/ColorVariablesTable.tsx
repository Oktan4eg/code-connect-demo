import { ColorVariablesBox } from './ColorVariablesBox';
import { ColorVariables } from './ColorVariables';

export function ColorVariablesTable() {
  return (
    <div>
      <div>
        <button>lightTheme</button>
        <button>darkTheme</button>
      </div>
      {ColorVariables.map((t) => {
        return <ColorVariablesBox name={t.name} value={t.value} var={t.var} />;
      })}
    </div>
  );
}
