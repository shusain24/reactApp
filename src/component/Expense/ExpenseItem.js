import React, { useState} from "react";
import "../Expense/ExpenseItem.css";
import ExpenseDate from "../Expense/Expensedate/ExpenseDate";
import Card from "../Card/Card";
const ExpenseItem = (props) => {
  const [titles, setTiles] = useState(props.title);
  const clickedHandler = () => {
    setTiles('Updated!')
    console.log('Clicked..!')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_desc">
        <h2>{titles}</h2>
      </div>
      <div className="expense-item_price">{props.amount}</div>
      <button onClick={clickedHandler}>Chnage Title</button>
    </Card>
  );
}

export default ExpenseItem;
