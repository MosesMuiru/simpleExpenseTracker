import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"

const initialState  = {
    transactions : [
        {id:1,text:"Flower",amount:-20},
        {id:2,text:"salary",amount:300},
        {id:3,text:"Book",amount:-10},
        {id:4,text:"Camera",amount:150},

    ]
}
// create context
export const GlobalContext = createContext(initialState);

// provider component that will be able to render
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState)
    
    // this is the prider--provide the state to the children
    return (<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}