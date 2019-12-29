import { combineReducers } from "redux";
import loggedReducer from "./login";
import userReducer from "./user";
import userDataReducer from "./userdata";
import showReducer from "./showSign";
import changeReducer from "./change";
import postReducer from "./posts";
import showPostReducer from "./showPost";
import showCommentReducer from "./comment";
import postIdReducer from "./postid";
import filterReducer from "./filter";

const allReducers = combineReducers({
    login: loggedReducer,
    user: userReducer,
    userData: userDataReducer,
    showSignup: showReducer,    
    change: changeReducer,
    post: postReducer,
    showPost: showPostReducer,
    showComment: showCommentReducer,
    postId: postIdReducer,
    filter: filterReducer
});

export default allReducers;