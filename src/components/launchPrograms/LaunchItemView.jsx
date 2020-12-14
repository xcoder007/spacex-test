import React from "react";

import {
  FLIGHT_NUMBER,
  LAUNCH_SUCCESS,
  LAUNCH_YEAR,
  LINKS,
  MISSION_ID,
  MISSION_NAME,
  MISSION_PATCH_SMALL,
} from "../../constants/launchDataDefs";

const LaunchItemView = ({ launchDetails = {} }) => {
  const {
    [LAUNCH_YEAR]: launchYear,
    [LINKS]: links,
    [MISSION_NAME]: name,
    [FLIGHT_NUMBER]: id,
    [MISSION_ID]: missionIds = [],
    [LAUNCH_SUCCESS]: launchSuccess,
  } = launchDetails;
  return (
    <div className="launch-item col col-sm-4 col-md-3">
      <div>
        <img src={links[MISSION_PATCH_SMALL]} alt="Not found" />
      </div>
      <div>
        <h4>{`${name} #${id}`}</h4>
      </div>
      <div>
        <label>Mission Ids :</label>
        <ul>
          {missionIds.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div>
        <label>Launch Year :</label>
        {launchYear}
      </div>
      <div>
        <label>Successful Launch :</label>
        {launchSuccess}
      </div>
      <div>
        <label>Successful Landing :</label>
        {launchSuccess}
      </div>
    </div>
  );
};

export default LaunchItemView;
