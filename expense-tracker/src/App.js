import { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 12.5,
    date: new Date(2023, 7, 17),
  },
  {
    id: "e2",
    title: "TV",
    amount: 700,
    date: new Date(2023, 7, 10),
  },
  {
    id: "e3",
    title: "New Desk",
    amount: 400,
    date: new Date(2023, 7, 20),
  },
];

function App() {
 const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
