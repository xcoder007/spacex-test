import React from "react";
import ReactDOM from "react-dom";

import LaunchProgramView from "./components/launchPrograms/container/launchProgram/LaunchProgramView";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import "./css/commonStyles.css";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LaunchProgramView />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
