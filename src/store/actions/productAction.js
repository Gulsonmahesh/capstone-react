export const addtocart = (product) => {
    console.log(product);
    return (dispatch) => {
        try {
            dispatch({type: 'PROD_ADD', product});
        } catch(error) {
            console.log(error);
            dispatch({type: 'PROD_ADD_FAILURE', error });
        }
    }
}

export const removefromcart = (product) => {
    return (dispatch) => {
        try {
            dispatch({type: 'PROD_REMOVE', product});
        } catch(error) {
            console.log(error);
            dispatch({type: 'PROD_REMOVE_FAILURE', error });
        }
    }
}


