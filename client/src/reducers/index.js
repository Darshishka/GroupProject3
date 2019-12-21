import { combineReducers } from "redux";
import loggedReducer from "./login";
import userReducer from "./user";
import userDataReducer from "./userdata";
import showReducer from "./showSign";
import changeReducer from "./change";
import postReducer from "./posts";
import showPostReducer from "./showPost";
import showCommentReducer from "./comment";

const allReducers = combineReducers({
    login: loggedReducer,
    user: userReducer,
    userData: userDataReducer,
    showSignup: showReducer,    
    change: changeReducer,
    post: postReducer,
    showPost: showPostReducer,
    showComment: showCommentReducer
});

export default allReducers;