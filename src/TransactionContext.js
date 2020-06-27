import React, { createContext, useReducer } from "react";
import TransactionReducer from './TransactionReducer';

const initialTransactions = [


]

export const TransactionContext = createContext(initialTransactions);

const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            delTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}
export default TransactionProvider;