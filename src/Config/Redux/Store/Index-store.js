import {createStore, applyMiddleware} from "redux";
import Reducer from "../Reducer/Index-reducer.js";
import thunk from "redux-thunk";

export const Store  = createStore(Reducer, applyMiddleware(thunk))
