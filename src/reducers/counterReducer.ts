import { ActionTypes } from "../actions/counterActions";
import { IAction } from "../models/IAction";

type State = number;

const handlers = {};

export function counterReducer(state: State = 0, action: IAction): State {
  if (handlers[action.type]) {
    return handlers[action.type](state, action.payload);
  }

  return state;
}

handlers[ActionTypes.Increment] = function(state: State): State {
  return state + 1;
};

handlers[ActionTypes.Decrement] = function(state: State): State {
  return state - 1;
};
