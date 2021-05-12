import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [ toggle, setToggle ] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		console.log(expenseData);
		props.onAddExpense(expenseData);
		setToggle(false);
	};
	const expenseFormHandler = () => {
		setToggle(true);
	};
	const hideExpenseFormHandler = () => {
		setToggle(false);
	};
	return (
		<div className="new-expense">
			{/* <button onClick={expenseForm}>Add new Expenses</button> */}
			{!toggle && <button onClick={expenseFormHandler}>Add new expenses</button>}
			{toggle && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={hideExpenseFormHandler} />}
		</div>
	);
};

export default NewExpense;
