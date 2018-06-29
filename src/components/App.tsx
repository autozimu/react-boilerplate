import * as React from "react";
import { hot } from "react-hot-loader";
import { Counter } from "./Counter";
import { Messages } from "./Messages";

function AppBase() {
  return (
    <div>
      <Counter />
      <Messages />
    </div>
  );
}

export const App = hot(module)(AppBase);
