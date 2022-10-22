import React from "react";
import { Input } from "antd";
import "./WorkDetails.css";

const WorkDetails = () => {
  return (
    <div className="page-two">
      <div className="titles">
        <div className="main-title">Let's set up a home for all your work</div>
        <div className="sub-title">
          You can always create another workspace later.
        </div>
      </div>
      <form className="work-details-form">
        <label>Workspace Name</label>
        <input type="text" placeholder="Eden"></input>
        <label>
          Workspace URL <span>(optional)</span>
        </label>
        <Input addonBefore="www.eden.com/" defaultValue="Example" />
      </form>
    </div>
  );
};

export default WorkDetails;
