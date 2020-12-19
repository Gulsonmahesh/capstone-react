import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import firebaseConfig  from './config/fbConfig';
import store from './store/createStore';
// import firebase from 'firebase/app'
//import { createFirestoreInstance } from 'redux-firestore'


// Initialize firebase instance
// firebase.initializeApp(firebaseConfig);

// const rrfProps = {
//   firebase,
//   config: { userProfile: 'users'},
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
      <App />
    {/* </ReactReduxFirebaseProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
