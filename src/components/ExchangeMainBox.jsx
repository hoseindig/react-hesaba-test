import ExchangeBox from "./exchangeBox";
import styles from "./exchangeMainBox.module.scss";
import ToolbarBox from "./toolbarBox";

const ExchangeMainBox = () => {
  return (
    <div className={styles["exchange-main-box"]}>
      <div className="p-3">
        <ExchangeBox />
      </div>
      <ToolbarBox />
      <div className={styles["down-box"] + " py-5 px-3"}>
        <ExchangeBox />
      </div>
    </div>
  );
};

export default ExchangeMainBox;
