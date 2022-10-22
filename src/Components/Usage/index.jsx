import React from "react";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import "./Usage.css";
import "../WelcomePage/WelcomePage.css";
const Usage = () => {
  return (
    <>
      <div className="titles">
        <div className="main-title">How are you planning to use Eden?</div>
        <div className="sub-title">
          We'll streamline your setup experience accordingly.
        </div>
      </div>
      <div className="buttons">
        <button>
          <UserOutlined />
          <span className="main-description">For myself</span>
          <span>Write better. Think more clearly. Stay organized.</span>
        </button>
        <button>
          <TeamOutlined />
          <span className="main-description">With my team</span>
          <span>Wikis, docs, tasks &amp; projects, all in one place.</span>
        </button>
      </div>
    </>
  );
};

export default Usage;
