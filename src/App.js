import React, { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Razor Mouse",
    amount: 1399.0,
    date: new Date(2020, 6, 14),
  },
  { id: "e2", title: "New TV", amount: 29999.99, date: new Date(2021, 2, 26) },
  {
    id: "e3",
    title: "Netflix Subscription",
    amount: 499.0,
    date: new Date(2021, 12, 27),
  },
  {
    id: "e4",
    title: "Grocery",
    amount: 1250.0,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </div>
  );
};

export default App;
