import './ExpenseDate.css';

function ExpenseDate(props) {
  const expenseDate = props.date;

  const mouth = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{mouth}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
