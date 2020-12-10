import { combineReducers } from 'redux';
import { firebaseReducer, firestoreReducer  } from 'react-redux-firebase'

import authReducer from './authReducer';
import ProductReducer from './productReducer';


const rootReducer = combineReducers({
    auth:authReducer, 
    product: ProductReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;
