export type ColorType = {
  // color: string;
  name: string;
  value?: string;
  var?: string;
  rootAlias?: string;
};

export function ColorVariablesBox2(props: ColorType) {
  // console.log(props);
  return (
    <div
      style={{
        backgroundColor: props.value,
        borderRadius: 24,
        padding: 8,
        margin: 24,
      }}
    >
      <h3>{props.name}</h3>
      <span>{props.value} </span>
    </div>
  );
}
