import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import ExchangeBox from "./exchangeBox";
import styles from "./exchangeMainBox.module.scss";
import ToolbarBox from "./toolbarBox";
import http from "../api/httpService";
import config from "../config.json";
import { exchangeActions } from "../store";

const ExchangeMainBox = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({});
  useEffect(() => {
    return () => {
      getBaseData();
      console.log("useEffect");
    };
  });

  const getBaseData = async () => {
    // const url =
    //   "https://v2.api.forex/rates/latest.json?beautify=true&key=71eb4b34-5f50-4c3b-bc37-c97aff8cedc4";

    const res = await http.get(config.getLatest); //test http://localhost:3100/getProductList
    console.log(res);
    if (res.data.result === "success") {
      dispatch(exchangeActions.setExchangeData(res.data));
    }
  };

  const selectHandler = (p) => {
    debugger;
    console.log(selected);
    const obj = {};
    obj[p.name] = p.value;
    setSelected({ ...selected, ...obj });
  };

  return (
    <div className={styles["exchange-main-box"]}>
      <div className="p-3">
        <ExchangeBox selectHandler={selectHandler} name="from" />
      </div>
      <ToolbarBox />
      <div className={styles["down-box"] + " pt-4 pb-3 px-3"}>
        <ExchangeBox selectHandler={selectHandler} name="to" disable={} />
      </div>
      <div className={styles["custom-btn"]}>
        <button onClick={getBaseData}>exchange</button>
      </div>
    </div>
  );
};

export default ExchangeMainBox;
