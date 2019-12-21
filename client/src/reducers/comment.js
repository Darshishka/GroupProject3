const showCommentReducer = (state = false, action) => {
    switch(action.type){
        case "SHOWCOMMENT":
            return true;
        case "CLOSECOMMENT":
            return false;
        default:
            return state;
    }
};

export default showCommentReducer;