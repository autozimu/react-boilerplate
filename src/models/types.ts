import { Dispatch } from "redux";
import { IAction } from "./IAction";

export type IDispatch = Dispatch<IAction, IState>;
