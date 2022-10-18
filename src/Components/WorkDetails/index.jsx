import React from "react";

const WorkDetails = () => {
  return (
    <>
      <div>Let's set upa a home for all your work</div>
      <div>You can always create another workspace later.</div>
      <form>
        <label>Workspace Name</label>
        <input type="text"></input>
        <label>
          Workspace URL <span>(optional)</span>
        </label>
        <input type="text"></input>
        <button>Create Workspace</button>
      </form>
    </>
  );
};

export default WorkDetails;
