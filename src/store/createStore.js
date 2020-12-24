import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { getFirebase } from 'react-redux-firebase'
// import { createStore } from 'redux';
import RootReducer from './reducer/rootReducer';

const initialState = {}

// const middlewares = [
//   thunk.withExtraArgument(getFirebase)
// ]
const store = createStore(RootReducer,initialState,compose(applyMiddleware(thunk)));

// const store = createStore(RootReducer,initialState)

export default store;