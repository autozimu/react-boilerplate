import { IAction } from "../models/IAction";

export enum ActionTypes {
  Increment = "COUNTER_INCREMENT",
  Decrement = "COUNTER_DECREMENT"
}

export function increment(): IAction {
  return {
    type: ActionTypes.Increment,
    payload: {}
  };
}

export function decrement(): IAction {
  return {
    type: ActionTypes.Decrement,
    payload: {}
  };
}
