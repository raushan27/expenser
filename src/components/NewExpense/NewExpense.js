import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddingNewExpense, setisAddingNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisAddingNewExpense(false);
  };

  const addingNewExpenseHandler = () => {
    setisAddingNewExpense(true);
  };

  const stopAddingNewExpenseHandler = () => {
    setisAddingNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddingNewExpense && (
        <button onClick={addingNewExpenseHandler}>Add New Expense</button>
      )}
      {isAddingNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddingNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
