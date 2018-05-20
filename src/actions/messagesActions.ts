import { IAction } from "../models/IAction";

export function request() {
  return dispatch => {
    fetch("http://arch:8080/messages")
      .then(response => response.json())
      .then(messages => dispatch(set(messages)))
      // tslint:disable:no-console
      .catch(err => console.error(err));
  };
}

export enum ActionTypes {
  Set = "MESSAGES_SET"
}

export function set(messages: string[]): IAction {
  return {
    type: ActionTypes.Set,
    payload: messages
  };
}
