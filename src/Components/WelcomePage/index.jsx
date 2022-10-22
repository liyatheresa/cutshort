import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="page-one">
      <div className="titles">
        <div className="main-title">Welcome! First things first...</div>
        <div className="sub-title">You can always change them later.</div>
      </div>
      <form className="welcome-page-form">
        <label>Full Name</label>
        <input type="text" placeholder="Steve Jobs"></input>
        <label>Display Name</label>
        <input type="text" placeholder="Steve"></input>
      </form>
    </div>
  );
};

export default WelcomePage;
