const postIdReducer = (state = {}, action) => {
    switch(action.type){
        case "POSTID":
            return state = action.payload;
        case "DELETEID":
            return state = {};     
        default:
            return state;
    }
};

export default postIdReducer;