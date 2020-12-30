export const loginAction = (user) => {
        return (dispatch) => {
        try {
            dispatch({type: 'USER_LOGIN_SUCCESS', user});
        } catch(error) {
            console.log(error);            
        }
    }
}

export const loginFailure = (error) => {
    return (dispatch) => {
        try {
            dispatch({type: 'USER_LOGIN_FAILURE', error });
        } catch(error) {
            console.log(error);
        }  
    }
}

export const logOut = function() {
    return (dispatch) => {
        dispatch({type: 'USER_LOG_OUT' })
    }
}

export const addUser = function() {
    
}