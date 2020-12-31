import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducer/rootReducer';

let initialState = {}

const logger = () => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
}

const composeEnhancer  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer,initialState,composeEnhancer(applyMiddleware(logger, thunk)));

// console.log(store.getState());

export default store;