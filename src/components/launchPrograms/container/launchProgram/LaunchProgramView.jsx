import React, { Component } from "react";

import FilterViewContainer from "../FilterViewContainer";
import LaunchListViewContainer from "../LaunchListViewContainer";

import "./LaunchProgramView.css";

class LaunchProgramView extends Component {
  render() {
    return (
      <div className="launch-container row">
        <div className="row header">SpaceX Launch Programs</div>
        <div className="row main-content">
          {/* <div className="row"> */}
          <div className="col col-sm-2">
            <FilterViewContainer />
          </div>
          <div className="col col-sm-10">
            <LaunchListViewContainer />
          </div>
          {/* </div> */}
        </div>
        <div className="row footer">Developed By : -- @ 2020</div>
      </div>
    );
  }
}

export default LaunchProgramView;
