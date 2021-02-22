import React, { createContext, useReducer } from 'react';

interface IndexContextProps {
    state: any;
    dispatch: ({ type }: { type: string }) => void;
}

const createDataContext = (reducer: any, actions: any, initalState: any) => {
    const Context: any = createContext({} as IndexContextProps);
    const Provider = ({ children }: any) => {
        const [state, dispatch] = useReducer(reducer, initalState);
        const boundActions: object | any = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
    };
    return { Context, Provider };
};

export default createDataContext;

/**import React, { createContext, useReducer } from "react";
interface IndexContextProps {
  state: any;
  dispatch: ({ type }: { type: string }) => void;
}
const createDataContext = (reducer: any, actions: any, initialState: any) => {
  const Context: any = createContext({} as IndexContextProps);
  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions: object | any = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
export default createDataContext; */
