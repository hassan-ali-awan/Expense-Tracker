
import React,{useContext,useState}from 'react';
import {TransactionContext} from './TransactionContext';

function Child() {
    let { transactions, addTransaction} = useContext(TransactionContext);

    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
//console.log(transactions);
const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
        alert("Please enter correct value");
        return false;
    }
    addTransaction({
        id: new Date().getTime(),
        amount: Number(newAmount),
        desc: newDesc
    });

    setDesc('');
    setAmount(0)
}

const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount > 0)
            income = income + transactions[i].amount
    }
    return income;
}


const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount < 0)
            expense += transactions[i].amount
    }
    return expense;
}
  return (
      <div className="background">
      <div className="container">
            <h2 className="text-center">
                Expense Tracker <br/>By Hassan Ali Awan
            </h2>
            <h3>Your Balance <br/>${getIncome() + getExpense()}</h3>
    
        <div className="expense-container">
            <h3>INCOME <br/>
            <span className="income-text"> ${getIncome()}</span></h3>
            <h3>EXPENSE <br/>
            <span className="expense-text">${getExpense()}</span></h3>
        </div>
        <br/>
        <h3>History
            <hr/>
        </h3>

        <ul className="transaction-list">
            {transactions.map( (transObj,ind)=>{
                return(
                     <li key={ind} >
                        <span>{transObj.desc}</span> 
                         <span>{transObj.amount}</span> 
                                    
                      </li>
                ) 
})}
        </ul>
        <h3>Add new transaction
            <hr/>
        </h3>
        <form className="transaction-form" onSubmit={handleAddition}>
            <label className="label">
                <h4>Enter Descripton </h4>
                <input type="text" value={newDesc}
                        placeholder="Description"
                        onChange={(ev) => setDesc(ev.target.value)} required></input>
                         
            
                <h4>Amount</h4>
                <h5>(Negative -Expense ,Positive -Income)</h5>
                <input type="number" value={newAmount}
                        placeholder="Amount"
                        onChange={(ev) => setAmount(ev.target.value)} required></input><br/>
                
                        
                
                
             </label>
             <input className="button" type="submit" value="Add transaction"></input>
        </form>
    </div>
    </div>
  );
}

export default Child;
