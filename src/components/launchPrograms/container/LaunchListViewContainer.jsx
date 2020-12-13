import React from "react";
import { connect } from "react-redux";
import LaunchListView from "../LaunchListView";

const LaunchListViewContainer = ({ launchData }) => (
  <LaunchListView launchData={launchData} />
);

const mapStateToProps = (state) => {
  return {
    launchData: state.launch.data || [],
  };
};

export default connect(mapStateToProps)(LaunchListViewContainer);
