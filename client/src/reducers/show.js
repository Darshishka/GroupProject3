const showReducer = (state = false, action) => {
    switch(action.type){
        case "SHOW":
            return true;
        case "CLOSE":
            return false;
        default:
            return state;
    }
};

export default showReducer;