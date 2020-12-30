import { API_BASE_ADDRESS } from '../../utilities/constants';

export const initProducts = () => {
    return async (dispatch) => {
        try {
            await fetch(`${API_BASE_ADDRESS}/modals`).then( res => res.json()).then( result => {
                dispatch({type: 'LOAD_PRODUCT', result});
            })
            
        } catch(error) {
            console.log(error);
            dispatch({type: 'LOAD_PRODUCT_FAILURE', error });
        }
    } 
}

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


