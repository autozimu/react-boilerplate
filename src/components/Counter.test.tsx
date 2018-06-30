import * as React from "react";
import { CounterBase } from "./Counter";
import { mount } from "enzyme";

test("Counter should be able to render", () => {
  const dispatch = jest.fn();
  const counter = mount(<CounterBase counter={0} dispatch={dispatch} />);
  expect(counter.text()).toBe("Counter: 0--++");
});
