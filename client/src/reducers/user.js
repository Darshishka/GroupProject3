const userReducer = (state = {}, action) => {
    switch(action.type){
        case "USER":
            return {
                ...state,
                [action.payload.name]: action.payload.value
                };
        case "DELETEUSER":
            return state = {};
        default:
            return state;
    }
};
export default userReducer;