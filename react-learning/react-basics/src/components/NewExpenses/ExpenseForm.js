import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
	const [ enteredTitle, setEnteredTitle ] = useState('');
	const [ enteredAmount, setEnteredAmount ] = useState('');
	const [ enteredDate, setEnteredDate ] = useState('');

	const titleEnteredHandler = (e) => {
		setEnteredTitle(e.target.value);
	};
	const amountEnteredHandler = (e) => {
		setEnteredAmount(e.target.value);
	};
	const dateEnteredHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>
						<p>Title</p>
						<input type="text" aria-label="expense name" onChange={titleEnteredHandler} />
					</label>
				</div>
				<div className="new-expense__control">
					<label>
						<p>Amount</p>
						<input
							type="number"
							min="0.01"
							step="0.01"
							aria-label="amount"
							onChange={amountEnteredHandler}
						/>
					</label>
				</div>
				<div className="new-expense__control">
					<label>
						<p>Date</p>
						<input
							type="date"
							min="01-01-2019"
							max="31-12-2022"
							aria-label="date"
							onChange={dateEnteredHandler}
						/>
					</label>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
