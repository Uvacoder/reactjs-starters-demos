import './ExpenseItem.css';

const ExpenseItem = ({expenses})=> {
  const expenseDate = new Date() ;
  const expenseTitle = 'Rent Income';
  const expenseAmount = 2000;
  return(
    <div>
      {expenses.map((exp, id) =>(
      <div className="expense-item"  key={exp.id}>
        <div>Date: {exp.date.toDateString()}</div>
        <div className="expense-item__description">
          <h2>{exp.title}</h2>
          <div className="expense-item__price">Amount:{exp.amount}</div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default ExpenseItem;