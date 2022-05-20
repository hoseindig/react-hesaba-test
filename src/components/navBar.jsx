import { Container, Navbar } from "react-bootstrap";

const BavBarBox = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/image/logo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Test
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default BavBarBox;
