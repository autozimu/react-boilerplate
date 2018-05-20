import { ActionTypes } from "../actions/messagesActions";
import { IAction } from "../models/IAction";

type State = string[];

const handlers = {};

export function messagesReducer(state: State = [], action: IAction): State {
  if (handlers[action.type]) {
    return handlers[action.type](state, action.payload);
  }

  return state;
}

handlers[ActionTypes.Set] = function(state: State, message: State): State {
  return message;
};
