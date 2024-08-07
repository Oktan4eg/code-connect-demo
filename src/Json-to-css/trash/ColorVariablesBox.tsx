export type ColorType = {
  name?: string;
  value?: string;
  var?: string;
};

export function ColorVariablesBox(props: ColorType) {
  console.log(props.name);
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
      <span>{props.name}</span>
      <span>{props.var}</span>
    </div>
  );
}
