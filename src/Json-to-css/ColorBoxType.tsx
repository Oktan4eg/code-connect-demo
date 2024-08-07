import './style.css';
export type ColorBoxType = {
  name: string;
  value: string;
  var?: string;
  rootAlias?: string;
};

export function GetVariablesBox(type: ColorBoxType) {
  return (
    <div
      className='wrap'
      style={{
        backgroundColor: type.value,
      }}
    >
      <div className='card'>
        <p>
          {type.name} {type.value}
        </p>
      </div>
    </div>
  );
}
