import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import "./Finish.css";
import "../WelcomePage/WelcomePage.css";
const Finish = () => {
  return (
    <div className="finish-page">
      <div className="tick-icon">
        <CheckOutlined style={{ color: "#fff" }} />
      </div>
      <div className="main-title">Congratulations, Eren!</div>
      <div className="sub-title">
        You have completed onboarding, you can start using Eden!
      </div>
      <button className="finish-button">Launch Eden</button>
    </div>
  );
};

export default Finish;
