import React, { Component } from "react";
import ProjectNavbar from "./projectNavbar";
import "./mainStyle.css";
import Page1 from "./page1";
import Page2 from "./page2";
class MainProject extends Component {
  render() {
    return (
      <div className="main">
        <ProjectNavbar />
        <Page1 />
        <Page2 />
      </div>
    );
  }
}
export default MainProject;
