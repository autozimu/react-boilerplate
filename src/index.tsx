import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import "semantic-ui-css/semantic.min.css";

import { App } from "./components/App";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
