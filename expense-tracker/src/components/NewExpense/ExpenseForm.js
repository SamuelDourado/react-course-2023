import "./ExpenseForm.css";
import {useState} from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    };

    /**
     * 77. Alternative: Creating A Shared Handler Function
     * onChange={(event) => inputChangeHandler(indentifier, event.target.value)}
     */
    // const inputChangeHandler = {identifier, value} => {
    //     if(identifier == 'title') {
    //         setEnteredTitle(value);
    //     } else if(identifier == 'date') {
    //         setEnteredDate(value);
    //     } else {
    //         setEnteredAmount(value);
    //     }
    // }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        };

        props.onExpenseData(expenseData);
        console.log(expenseData);
        
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" value={enteredAmount} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" value={enteredDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit"> add Expense </button>
        </div>
    </form>;
};

export default ExpenseForm;