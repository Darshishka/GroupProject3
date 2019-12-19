const userDataReducer = (state = {}, action) => {
    switch(action.type){
        case "USERDATA":      
            return state = action.payload
        case "DELETEDATA":
            return state = {};
        default:
            return state;
    }
};
export default userDataReducer;