import ExpenseList from "./components/Expenses/ExpenseList";

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
      <h2>Let's get started!</h2>
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
