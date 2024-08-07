import './style.css';
export type ColorThemeType = {
  name: string;
};

export function GetVariablesTheme(type: ColorThemeType) {
  // console.log(props);
  return (
    <div className='wrap'>
      <div>
        <h1>{type.name}</h1>
      </div>
    </div>
  );
}
