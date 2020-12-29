export const loginAction = (user) => {
        return (dispatch) => {
        try {
            dispatch({type: 'USER_LOGIN_SUCCESS', user});
        } catch(error) {
            console.log(error);
            dispatch({type: 'USER_LOGIN_FAILURE', error });
        }
    }
}

export const createUser = (userDetails)  => {
    return (dispatch) => {
        dispatch({type: 'CREATE_USER', userDetails})
    }
}

export const logOut = function() {
    return (dispatch) => {
        dispatch({type: 'USER_LOG_OUT' })
    }
}

export const addUser = function() {
    
}