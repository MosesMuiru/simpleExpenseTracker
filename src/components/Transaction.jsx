import React from 'react'


function Transaction({transaction}) {
    const sign = transaction.amount < 0 ? "-":"+"
  return (
    <div>
         <ul className="list" id="list">

{transaction.map((transaction) => (
     <li className={transaction.amount < 0 ? "minus":"plus"}>

   {transaction.text} <span>{sign}${transaction.amount}</span>
     <button className="delete-btn">X</button>
 </li>
))}

</ul>
    </div>
  )
}

export default Transaction