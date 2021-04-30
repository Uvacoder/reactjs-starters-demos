import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({expenses}) => {

  // const time = toLocaleString('en-GB', {hour:'numeric', minute:'numeric', hour12: false});
  // const month = toLocaleString('en-GB', {month: 'long'});


  return (
    <div>
      {expenses.map(exp =>(
        <div className='expense-item'key={expenses.id}>
          <ExpenseDate date={exp.date}/>
            <div className='expense-item__description'>
              <h2>{exp.title}</h2>
            <div className='expense-item__price'>${exp.amount}</div>
          </div>
         </div>
      ))}
    </div>
  );
}

export default ExpenseItem;
