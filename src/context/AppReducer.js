const reducer = (state, action) => {
    switch(action.type){
        case 'SET_FINAL_ELEMENT':
            return {
                ...state,
                finalElement: action.payload
            }
        default:
            return state;
    }
};

export default reducer;