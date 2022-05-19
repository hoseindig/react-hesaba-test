import { useState } from "react";
import styles from "./InputBox.module.scss";
const InputBox = ({
  name = "name",
  type = "number",
  selectHandler,
  disabled,
}) => {
  const [value, setValue] = useState(0);
  const onChange = ({ target: input }) => {
    console.log(input.name, input.value);
    setValue(input.value);
    selectHandler({ name: input.name, value: input.value });
  };
  return (
    <input
      name={name}
      onChange={onChange}
      className={styles["input"]}
      type={type}
      value={value}
      disabled={disabled}
      min="0"
    />
  );
};

export default InputBox;
