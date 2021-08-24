import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer.js";

const initialState = {
  finalElement: ""
};

export const ElementContext = createContext(initialState);

export const ElementProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setFinalElement = (newElement) => {
        dispatch({
            type: 'SET_FINAL_ELEMENT',
            payload: newElement
        });
    }

    return (
        <ElementContext.Provider value={{
            finalElement: state.finalElement,
            setFinalElement: setFinalElement
        }}>
        {children}
        </ElementContext.Provider>
    );
}

