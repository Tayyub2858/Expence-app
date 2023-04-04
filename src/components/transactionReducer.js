import React from "react";

const TransactionReducer = ((state ,action)=>{
    switch (action.type) {
        case "ADD_TRANSCATION":{
            return [...state , action.payload ]
        }   
        default: 
        return state;
    }
})
export default TransactionReducer;