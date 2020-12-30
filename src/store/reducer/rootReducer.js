import { combineReducers } from 'redux';
import authReducer from './authReducer';
import ProductReducer from './productReducer';

const rootReducer = combineReducers({
    auth:authReducer, 
    product: ProductReducer
});

export default rootReducer;
