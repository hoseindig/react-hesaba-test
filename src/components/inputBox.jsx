import styles from "./InputBox.module.scss";
const InputBox = ({ name = "name", val = 0, type = "number" }) => {
  const onChange = ({ target: input }) => {
    debugger;
    console.log(input.name, input.value);
  };
  return (
    <input
      name={name}
      onChange={onChange}
      className={styles["input"]}
      type={type}
      value={val}
    />
  );
};

export default InputBox;
