import { InputGroup, FormControl } from "react-bootstrap";
const InputBox = ({ symbol = "-", label = "label" }) => {
  return (
    <InputGroup className="mb-3">
      <FormControl aria-label={label} />
      <InputGroup.Text>{symbol}</InputGroup.Text>
      {/* <InputGroup.Text>0.00</InputGroup.Text> */}
    </InputGroup>
  );
};

export default InputBox;
