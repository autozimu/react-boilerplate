import { mount } from "enzyme";
import * as React from "react";
import { CounterBase } from "./Counter";

test("Counter should be able to render", () => {
  const dispatch = jest.fn();
  const counter = mount(<CounterBase counter={0} dispatch={dispatch} />);
  expect(counter.text()).toBe("Counter: 0--++");
});
