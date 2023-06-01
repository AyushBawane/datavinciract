import { combineReducers } from "redux";
import WindowWidthReducer from "./WindowWidthReducer";

// all the reducers are given a key inside combineReducers
const reducers = combineReducers({
    WindowWidth: WindowWidthReducer,
});

export default reducers;