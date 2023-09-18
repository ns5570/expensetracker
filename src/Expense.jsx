import React, { useState } from "react";
import './Expense.css';


function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  

  // Function to add a new expense
  const addExpense = () => {
    if (expenseName && expenseAmount) {
      const newExpense = {
        id: Date.now(), // Unique ID (you can use a library for more robust IDs)
        name: expenseName,
        amount: parseFloat(expenseAmount),
      };

      setExpenses([...expenses, newExpense]);
      setExpenseName("");
      setExpenseAmount("");
    }
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <div className="expense-form">
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Expense Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expense List</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.name}</span>
              <span>&#8377; 
{expense.amount.toFixed(2)}</span>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="expense-summary">
        <h2>Expense Summary</h2>
        <p>Total Expenses: &#8377;{expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ExpenseTracker;
