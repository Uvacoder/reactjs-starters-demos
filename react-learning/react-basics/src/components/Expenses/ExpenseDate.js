import './ExpenseDate.css';

const ExpenseDate = (exp) => {
  const time = exp.date.toLocaleString('en-GB', {hour: 'numeric', minute:'numeric', hour12: false});
  const month = exp.date.toLocaleString('en-GB', {month: 'long'});
  const year = exp.date.getFullYear();
  const day = exp.date.toLocaleString('en-GB', {day: 'numeric'});

  return ( 
    <div className="expense-date">
      
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__time">{time}</div>

    </div>
   );
}
 
export default ExpenseDate;
