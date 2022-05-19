import { Form } from "react-bootstrap";
const SelectBox = ({ options = [], size, selectedFn }) => {
  return (
    <Form.Select size={size ? size : "sm"}>
      <option>Small select</option>
      {options.map((i) => {
        return <option value={i.value}>{i.title}</option>;
      })}
    </Form.Select>
  );
};

export default SelectBox;
