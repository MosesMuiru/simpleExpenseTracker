import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
import Transaction from "./Transaction.jsx"
function TransactionList() {
    const {transactions} = useContext(GlobalContext)

    console.log(transactions)
  return (
    <div>
        
        <h3>History</h3>
        <Transaction transaction={transactions}/>
       
    </div>
  )
}

export default TransactionList