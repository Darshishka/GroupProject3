import { combineReducers } from "redux";
import loggedReducer from "./login";
import userReducer from "./user";
import userDataReducer from "./userdata";
import showReducer from "./show";
import changeReducer from "./change";

const allReducers = combineReducers({
    login: loggedReducer,
    user: userReducer,
    userData: userDataReducer,
    show: showReducer,
    change: changeReducer,
});

export default allReducers;