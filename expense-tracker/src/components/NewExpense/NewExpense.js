import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showAddNewExpense, setShowAddNewExpense] = useState(true); 
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
         props.onAddExpense(expense);
         setShowAddNewExpense(true);
    };

    const clickAddNewExpenseHandler = (event) => {
        setShowAddNewExpense(false);
    };

    const cancelHandler = () => {
        setShowAddNewExpense(true);
    }

    let newExpenseContent = <ExpenseForm onCancel={cancelHandler} onExpenseData={saveExpenseDataHandler} />;
    if(showAddNewExpense) {
        newExpenseContent = <button type="button" onClick={clickAddNewExpenseHandler}> add Expense Expense </button>;
    }

    return <div className="new-expense">
        {newExpenseContent}
    </div>;
};

export default NewExpense;