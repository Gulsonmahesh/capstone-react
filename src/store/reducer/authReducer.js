let initAuthState = {
    loginStatus: false,
    authError: null,
    user: (sessionStorage.getItem('userStatus')) ? JSON.parse(sessionStorage.getItem('userStatus')) : null
};

const userDetails =  JSON.parse(sessionStorage.getItem('userStatus'));
if(userDetails && userDetails.loginStatus) {
    initAuthState = {
        ...initAuthState,
        loginStatus: true
    }
}

const authReducer = (state = initAuthState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            state =  {
                ...state,
                loginStatus : true,
                authError: null,
                user: action.user
            }
            sessionStorage.setItem('userStatus', JSON.stringify(state));
            return  state;
        case 'USER_LOGIN_FAILURE':
            if(sessionStorage.getItem('userStatus')) {
                sessionStorage.removeItem('userStatus')
            }
            return {
                ...state,
                loginStatus: false,
                authError: 'Login Failed'
            }
        case 'USER_LOG_OUT':
            sessionStorage.removeItem('userStatus');
            return {
                ...state,
                loginStatus: false,
                authError: null,
                user: null
            }
        default:
            return state;
    }
}

export default authReducer;