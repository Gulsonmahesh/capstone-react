import { combineReducers } from 'redux';
import authReducer from './authReducer';
import ProductReducer from './productReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    auth:authReducer, 
    product: ProductReducer,
    filter:filterReducer
});

export default rootReducer;
