import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [expenseTitle, setExpenseTitle] = useState(props.title);
    const expenseDate = props.date;
    // let expenseTitle = props.title;
    const expenseAmount = props.amount;

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;