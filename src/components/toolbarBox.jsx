import styles from "./toolbar.module.scss";

const ToolbarBox = () => {
  return (
    <div className={styles["toolbar"]}>
      <div className={styles["swap"]}>
        <i className="fa fa-long-arrow-up"></i>
        <i className="fa fa-long-arrow-down"></i>
      </div>
      <div className={styles["exchange-rate"]}>
        <i className="fa fa-line-chart" aria-hidden="true"></i>
        <span>$1 = 1.333333 €</span>
      </div>
    </div>
  );
};

export default ToolbarBox;
