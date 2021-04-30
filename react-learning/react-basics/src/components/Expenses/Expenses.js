import ExpenseItem from "./ExpenseItem"

import './Expenses.css'
const Expense = (expenses) => {
  return ( 
    <div className="expenses">
      <ExpenseItem expenses={expenses}/>
    </div>
   );
}
 
export default Expense;