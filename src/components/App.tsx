import React from "react";
import { Counter } from "./Counter";
import { Messages } from "./Messages";

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Counter />
        <Messages />
      </div>
    );
  }
}
