import React from 'react';

interface IContext {
    children: any;
}

interface Props {
    context: IContext;
}

const createDataContext = (reducer: any, actions: any, initalState: {}) => {
    const Context = React.createContext<Props | null>(null);

    const Provider: React.FC = ({ children }) => {
        const [state, dispatch] = React.useReducer(reducer, initalState);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
    };

    return { Context, Provider };
};

export default createDataContext;
