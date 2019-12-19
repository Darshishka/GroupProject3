const changeReducer = (state = {}, action) => {
    switch(action.type){
        case "CHANGE":
            return {
                ...state,
                [action.payload.name]: action.payload.value
                };
        default:
            return state;
    }
};
export default changeReducer;

