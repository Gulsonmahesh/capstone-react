export const addtocart = (product) => {
    return (dispatch) => {
        try {
            dispatch({type: 'PROD_ADD', product});
        } catch(error) {
            console.log(error);
            dispatch({type: 'PROD_ADD_FAILURE', error });
        }
    }
}

export const countChanger = (product, countType) => {
    return (dispatch) => {
        try {
            dispatch({type: 'PROD_COUNT_CHANGE', product, countType});
        } catch(error) {
            console.log(error);
            dispatch({type: 'PROD_COUNT_CHANGE_FAILURE', error });
        }
    }
}
export const removeFromcart = (id) => {
    return (dispatch) => {
        try {
            dispatch({type: 'PROD_REMOVE', id});
        } catch(error) {
            console.log(error);
            dispatch({type: 'PROD_REMOVE_FAILURE', error });
        }
    }
}


