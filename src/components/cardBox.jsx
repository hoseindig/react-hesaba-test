import { Card } from "react-bootstrap";
const CardBox = ({ children, title, header }) => {
  return (
    <Card border="light">
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
};
// style={{ width: "18rem" }}
export default CardBox;
