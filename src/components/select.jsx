import { useSelector } from "react-redux";

// import { Form } from "react-bootstrap";

import styles from "./SelectBox.module.scss";
const SelectBox = ({ name = "name", options = [], size, selectHandler }) => {
  const exchangeCombo = useSelector((state) => state.exchangeComboSymbole);
  const onChange = ({ target: input }) => {
    console.log(input.name, input.value);
    selectHandler({ name: input.name, value: input.value });
  };
  return (
    <div className={styles["selectdiv"]}>
      <select onChange={onChange} name={name}>
        {exchangeCombo.map((i) => {
          return <option value={i}>{i}</option>;
        })}
      </select>
    </div>
    // <select name="" id="" className={styles["select"]}>
    //   <option>select</option>
    /*
      {options.map((i) => {
        return <option value={i.value}>{i.title}</option>;
      })}

      */
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
