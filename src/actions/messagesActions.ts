import { Dispatch } from "redux";
import { IAction } from "../models/IAction";

export function request(): any {
  return (dispatch: Dispatch<IAction>) =>
    fetch("http://arch:8080/messages")
      .then(response => response.json())
      .then(messages => dispatch(set(messages)))
      // tslint:disable:no-console
      .catch(err => console.error(err));
      // tslint:enable:no-console
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
