import { LAUNCH_DATA_ENDPOINT } from "../constants/endpoints";
import {
  LAUNCH_SUCCESS,
  LAUNCH_YEAR,
  LAND_SUCCESS,
} from "../constants/launchDataDefs";
import { doFetch, getHeaderForGet } from "../helpers/serviceHelpers";
import {
  LAUNCH_DATA_REQUESTED,
  LAUNCH_DATA_REQUEST_FAILURE,
  LAUNCH_DATA_REQUEST_SUCCESS,
} from "./actionTypes";

export function fetchLaunchData(filter) {
  return async (dispatch, getState) => {
    const state = getState();
    if (state.launch && state.launch.endpoint) {
      return;
    }
    let url = LAUNCH_DATA_ENDPOINT;
    if (filter) {
      const params = new URLSearchParams();
      const {
        selectedYear,
        isSuccessfullLaunch,
        isSuccessfullLanding,
      } = filter;
      if (selectedYear != null) {
        params.set(LAUNCH_YEAR, selectedYear);
      }
      if (isSuccessfullLaunch != null) {
        params.set(LAUNCH_SUCCESS, isSuccessfullLaunch);
      }
      if (isSuccessfullLanding != null) {
        params.set(LAND_SUCCESS, isSuccessfullLanding);
      }
      url = `${url}&${params}`;
    }
    dispatch({
      type: LAUNCH_DATA_REQUESTED,
      payload: url,
    });
    try {
      const result = await doFetch(url, getHeaderForGet());
      dispatch({
        type: LAUNCH_DATA_REQUEST_SUCCESS,
        payload: result,
      });
    } catch (ex) {
      console.log(ex);
      dispatch({
        type: LAUNCH_DATA_REQUEST_FAILURE,
        payload: {
          errorMessage: ex.message,
        },
      });
    }
  };
}
