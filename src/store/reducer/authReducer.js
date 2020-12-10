const initAuthState = {
    user: {
        loginStatus: false
    }
};

const authReducer = (state = initAuthState, action) => {
    switch (action.type) {
        case 'USEUSER_LOGIN_SUCCESSR_LOGIN':
            state.user.loginStatus = true;
            return state;
        default:
            return state;
    }
}

export default authReducer;