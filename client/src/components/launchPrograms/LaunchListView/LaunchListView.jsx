import React from "react";

import { FLIGHT_NUMBER } from "../../../constants/launchDataDefs";
import LaunchItemView from "../LaunchItemView/LaunchItemView";

const LaunchListView = ({ launchData }) => (
  <div className="row launch-data-content">
    {launchData.map((x) => (
      <LaunchItemView key={x[FLIGHT_NUMBER]} launchDetails={x} />
    ))}
  </div>
);

export default LaunchListView;
