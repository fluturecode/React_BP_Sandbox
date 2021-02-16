import createDataContext from './indexContext';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT = 'LOGOUT';
const SET_USER = 'SET_USER';
const SET_USER_TYPE = 'SET_USER_TYPE';

const initialState = {
    user: {},
    token: null,
    userType: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, user: action.user, token: action.token };
        case LOGOUT:
            return { ...initialState };
        case SET_USER:
            return { ...state, user: action.user };
        case SET_USER_TYPE:
            return { ...state, userType: action.userType };
        default:
            return state;
    }
};

const setUser = dispatch => user {
    
}

export const { Context, Provider } = createDataContext(
    authReducer,
    {
        setUser,
        userLogout,
        setToken,
        setUserType,
        loginUser,
    },
    initialState,
);
