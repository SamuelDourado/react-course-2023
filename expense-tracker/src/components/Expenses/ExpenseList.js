import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseChart from "./ExpensesChart";
import './ExpenseList.css';

function ExpenseList(props) {
  const expenses = props.expenses;
  const [year, setYear] = useState('2020');
  let filterInfoText = '2019, 2021 & 2022';

  if(year === '2019') {
    filterInfoText = '2020, 2021 & 2022';
  } else if(year === '2022') {
    filterInfoText = '2019, 2020 & 2021';
  }
  else if(year === '2021'){
    filterInfoText = '2019, 2020 & 2022';
  }

  const changeYearHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense) => { 
    return expense.date.getFullYear().toString() === year;
  });

  let expensesContent = <p className="expenses-list__fallback">No Expenses found.</p>;

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    }); 
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeYear={changeYearHandler}/>
      <p>Data for years {filterInfoText} is hidden.</p>
      <ExpenseChart expenses={filteredExpenses}/>
      {expensesContent}
    </Card>
  );
}

export default ExpenseList;
