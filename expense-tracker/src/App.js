import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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

  return (
    <div>
      <NewExpense />
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
