import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchLaunchData } from "../../../actions/launchActions";
import FilterView from "../FilterView/FilterView";

const FilterViewContainer = ({ fetchLaunchData }) => (
  <FilterView onSearch={fetchLaunchData} />
);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchLaunchData,
    },
    dispatch
  );
};

export default connect(undefined, mapDispatchToProps)(FilterViewContainer);
