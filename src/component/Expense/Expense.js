import ExpenseItem from '../Expense/ExpenseItem'
import NewExpense from '../NewExpense/NewExpense';
import './Expense.css'
const Expense = (props)  => {
  return (
    <div>
    <NewExpense/>
    <div className="expense">
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />
    </div>
    </div>
  );
}

export default Expense;
