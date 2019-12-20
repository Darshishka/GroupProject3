const showReducer = (state = false, action) => {
    switch(action.type){
        case "SHOWSIGNUP":
            return true;
        case "CLOSESIGNUP":
            return false;
        default:
            return state;
    }
};

export default showReducer;