import { IAction } from "./IAction";
import { Dispatch } from "redux";

export type IDispatch = Dispatch<IAction, IState>;
