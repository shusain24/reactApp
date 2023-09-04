import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./Expensedate/ExpenseDate";
import Card from "./Card/Card";
function ExpenseItem(props) {
  console.log("the props is =>", props.expense);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_desc">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
