import { combineReducers } from "redux";
import AppData from "./reducers";

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        AppData
    });
}