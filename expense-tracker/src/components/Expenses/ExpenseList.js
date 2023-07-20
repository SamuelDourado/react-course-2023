import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './ExpenseList.css';

function ExpenseList(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default ExpenseList;
