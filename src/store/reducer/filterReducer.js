let filterState = [];

const filterReducer = (state = filterState, action) => {
    switch (action.type) {
        case 'LOAD_FILTER':
        state = action.result;
        return state
        default:
            return state;
    }
}

export default filterReducer;