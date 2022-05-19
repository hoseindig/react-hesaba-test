import { Form } from "react-bootstrap";
import styles from "./SelectBox.module.scss";
const SelectBox = ({ name = "name", options = [], size, selectedFn }) => {
  const onChange = ({ target: input }) => {
    debugger;
    console.log(input.name, input.value);
  };
  return (
    <div className={styles["selectdiv"]}>
      <select onChange={onChange} name={name}>
        <option selected> GBP </option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Last long option</option>
      </select>
    </div>
    // <select name="" id="" className={styles["select"]}>
    //   <option>select</option>
    //   {options.map((i) => {
    //     return <option value={i.value}>{i.title}</option>;
    //   })}
    // </select>
    // <Form.Select size={size ? size : "sm"}>
    //   <option>Small select</option>
    // {options.map((i) => {
    //   return <option value={i.value}>{i.title}</option>;
    // })}
    // </Form.Select>
  );
};

export default SelectBox;
