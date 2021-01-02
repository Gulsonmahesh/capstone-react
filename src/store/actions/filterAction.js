import { API_BASE_ADDRESS } from '../../utilities/constants';

export const initFilter = () => {
    return async (dispatch) => {
        try {
            await fetch(`${API_BASE_ADDRESS}/filterdata`).then( res => res.json()).then( result => {
                dispatch({type: 'LOAD_FILTER', result});
            })
        } catch(error) {
            console.log(error);
            dispatch({type: 'LOAD_PRODUCT_FAILURE', error });
        }
    }
}