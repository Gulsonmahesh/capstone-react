import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import RootReducer from './store/reducer/rootReducer';
import thunk from 'redux-thunk'
import { getFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import firebase from './config/fbConfig';

const fbConfig = firebase;
const rrfConfig = { userProfile: 'users' };

let store = createStore(RootReducer, 
  compose(
    reactReduxFirebase(fbConfig, rrfConfig),
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),    
    // reduxFirestore(firebase)
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
