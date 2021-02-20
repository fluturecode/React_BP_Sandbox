export const userReducer = (state: any, action: any) => {
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

type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};
