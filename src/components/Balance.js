import React, { useContext , useState } from "react";
import {TransactionContext} from "./transactionContext";

export default function Balance(){
   const addTransaction=useContext(TransactionContext);
    const transactions =useContext(TransactionContext);

    const[newDesc,setDesc]= useState();
    const[newAmount,setAmount]=useState();
 

    const handleAddition =(event)=>{
        event.preventDefault();
        addTransaction({
            amount : newAmount,
            desc : newDesc
        })
    }
    return(
        <div  className="table">
            <div>
            <h3 className="heading">Your Balance</h3>
            <h1 id="balance">$0.00</h1>
            </div>

            <div className="your-balance">
                <div className="incomeing">
                    <h4 className="income">INCOME</h4>
                    <h2 id="income">$500.00</h2>
                </div>
                <hr /><div className="expenceing">
                    <h4 className="income">EXPENCE</h4>
                    <h2 id="expence">$240.00</h2>
                </div>
            </div>

          <h3>History</h3>
          <hr />
          <ul className="transction-list">
              {transactions.map((transation)=>{
                  return(
                    <li>
                    <span>{transation.desc}</span>
                    <span>{transation.amount}</span>
                </li>
                  )
              })}
             
              
          </ul>

            <h3>Add New Transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                    <label className="text-new">
                        Enter Description <br />
                        <input type="text" onChange={(event)=>setDesc(event.target.value)}  required/>
                    </label>
                    <br />
                    <label className="text-new">
                        Enter Amount <br />
                        <input type="number"  onChange={(event)=>setAmount(event.target.value)} required />
                    </label>
                        <br />
                        <br />
                    <input type="Submit"  value="Add New Transaction" />

            </form>

        </div>
    );
}