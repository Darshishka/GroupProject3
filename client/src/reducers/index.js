import { combineReducers } from "redux";
import userReducer from "./user";
import userDataReducer from "./userdata";
import showReducer from "./showSign";
import postReducer from "./posts";
import showPostReducer from "./showPost";
import showCommentReducer from "./comment";
import postIdReducer from "./postid";
import filterReducer from "./filter";

const allReducers = combineReducers({  
    user: userReducer,
    userData: userDataReducer,
    showSignup: showReducer,
    post: postReducer,
    showPost: showPostReducer,
    showComment: showCommentReducer,
    postId: postIdReducer,
    filter: filterReducer
});

export default allReducers;