import { useState } from "react";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/soft-ui-dashboard.css";

import Profile from "./Profile";
import SideBare from "./SideBare";
import Main from "./MainDash/Main";

export default function Dashboard() {
  const [currentComponent, setComponent] = useState("");
  const handlComponents = (event) => {
    const Components = event.target.closest("a");
    const valueComponents = Components.querySelector("#components").innerHTML;
    setComponent(valueComponents);
  };
  return (
    <div className="g-sidenav-show bg-gray-100">
      <SideBare />
      <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
        <Profile handlComponents={handlComponents} />
        <div className="container-fluid py-4">
          <div className="row">
            <Main currentComponent={currentComponent} />
          </div>
        </div>
      </div>
    </div>
  );
}
