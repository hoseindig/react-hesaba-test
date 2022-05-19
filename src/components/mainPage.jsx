import { Container, Row, Col } from "react-bootstrap";
import CardBox from "./cardBox";
import BavBarBox from "./navBar";
import ExchangeMainBox from "./ExchangeMainBox";
const MainPage = () => {
  return (
    <div>
      <BavBarBox />
      <Container>
        <Row className=" mt-5 justify-content-md-center justify-content-sm-center">
          <Col md={6} sm={8} xs={12} lg={5}>
            <CardBox title="title" header="header">
              <ExchangeMainBox></ExchangeMainBox>
            </CardBox>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
