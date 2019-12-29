const filterReducer = (state = {}, action) => {
    switch(action.type){
        case "FILTER":
            return state = action.payload;
        case "DELETEFILTER":
            return state = {};     
        default:
            return state;
    }
};

export default filterReducer;