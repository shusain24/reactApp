import Expense from "./component/Expense";

function App() {
  const expenses = [
    {
      title: "Car insurance",
      amount: "294.67",
      date: new Date(2021, 2, 28),
    },
    {
      title: "Phone",
      amount: "$300",
      date: new Date(2022, 2, 28),
    },
    {
      title: "laptop insurance",
      amount: "$325.67",
      date: new Date(2023, 2, 28),
    },
    {
      title: "Apple",
      amount: "$294.67",
      date: new Date(2021, 12, 28),
    },
  ];

  return (
    <div className="App">
      <h2>Let's get started !</h2>
      <Expense item={expenses} />
    </div>
  );
}

export default App;
