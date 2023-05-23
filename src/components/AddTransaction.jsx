import React, { useState } from 'react'

function AddTransaction() {

    const [text,setText] = useState("")
    const [amount,setAmount] = useState("")

  return (
    <div>
        <h3>Add New Transaction</h3>
        <form action="">
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder='enter text ---'  onChange={ (e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br/>
              (negative - expense, positive - income)
                </label>
                <input type="number" placeholder='enter Amount'  onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction