let initAuthState = {
    loginStatus: false,
    authError: null,
    user: null
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
            if(action.user.email === 'mahesh@test.com' && action.user.password === 'mahesh') {
                state =  {
                    ...state,
                    loginStatus : true,
                    authError: null,
                    user: action.user.email
                } 
                
            } else {
                state = {
                    ...state,
                    loginStatus: false,
                    authError: 'Login Failed',
                    user: null
                }
            }
            sessionStorage.setItem('userStatus', JSON.stringify(state));
            return  state;
        case 'USER_LOGIN_FAILURE':
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