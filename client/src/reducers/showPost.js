const showPostReducer = (state = false, action) => {
    switch(action.type){
        case "SHOWPOST":
            return true;
        case "CLOSEPOST":
            return false;
        default:
            return state;
    }
};

export default showPostReducer;