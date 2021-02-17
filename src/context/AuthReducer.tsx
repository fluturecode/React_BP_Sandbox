export const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;
