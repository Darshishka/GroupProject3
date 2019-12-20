const postReducer = (state = {}, action) => {
    switch(action.type){
        case "POSTS":      
            return state = action.payload     
        default:
            return state;
    }
};
export default postReducer;