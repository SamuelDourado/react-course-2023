import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
         console.log(expense);
         props.onAddExpense(expense);
    };

    return <div className="new-expense">
        <ExpenseForm onExpenseData={saveExpenseDataHandler} />
    </div>;
};

export default NewExpense;