import { Container, Row, Col } from "react-bootstrap";

import SelectBox from "./select";
import InputBox from "./inputBox";
import styles from "./exchangeBox.module.scss";
const ExchangeBox = ({ options, symbol, label = "label" }) => {
  return (
    <div className={styles["exchange-box"]}>
      <Container className="px-0">
        <Row>
          <Col md="4">
            <div>
              <SelectBox options={options} />
              <label htmlFor="">{label}</label>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <InputBox symbol={symbol} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExchangeBox;
