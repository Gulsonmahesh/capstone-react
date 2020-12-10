import { error } from "jquery";

export const loginAction = (user) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            user.email,
            user.password
        ).then( () => {
            dispatch({type: 'USER_LOGIN_SUCCESS', user});    
        }).catch((error) => {
            dispatch({type: 'USER_LOGIN_FAILURE', error });    
        }) ;
    }
}

export const logout = function() {

}

export const addUser = function() {
    
}