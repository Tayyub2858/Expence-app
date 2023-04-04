import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transactionReducer";

const initialTransation = [
    {amount:400, desc:"Cash"},
    {amount:-40, desc:"Book"},
    {amount:-200, desc:"Cammera"}
]
 export const TransactionContext= createContext(initialTransation);
 
//  desgin for this funtion of transactionProvider ...............
 export function TranscationProvider ({childen}){
    let [state , dispatch]=useReducer(TransactionReducer , initialTransation);

    function addTransaction(transobj){
        dispatch({
           tyoe: "ADD_TRANSCATION",
           payload: {
               amount :transobj.amount,
               desc:transobj.desc
           },
        })
    }
    return(
        <TransactionContext.Provider value={{
            transcations:state,
            addTransaction
        }}>   
        {childen}
        </TransactionContext.Provider>
    )
 }