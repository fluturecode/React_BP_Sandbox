import { createContext } from 'react';
import { userReducer } from './Reducers';

type UserType = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type InitialStateType = {
    users: UserType[];
};

const initialState = {
    users: [],
};

export const AppContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const AppReducer = ({ users: [] }, action: any) => ({
    users: userReducer(users, action),
});

export const AppProvider = (React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
});
