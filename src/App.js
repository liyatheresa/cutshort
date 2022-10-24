import WelcomePage from "./Components/WelcomePage";
import WorkDetails from "./Components/WorkDetails";
import Usage from "./Components/Usage";
import Finish from "./Components/Finish";
import MultiStep from "react-multistep";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  const steps = [
    { name: "StepOne", component: <WelcomePage /> },
    { name: "StepTwo", component: <WorkDetails /> },
    { name: "StepThree", component: <Usage /> },
    { name: "StepFour", component: <Finish /> },
  ];
  return (
    <div className="App">
      <div className="heading">
        <img src={require("./eden.png")} alt="logo"></img>
        <h2>Eden</h2>
      </div>
      <MultiStep
        activeStep={0}
        showNavigation={true}
        prevStyle={{ display: "none" }}
        steps={steps}
      />
    </div>
  );
}

export default App;
