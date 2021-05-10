import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [ filteredYear, setFilteredYear ] = useState('2020');
	const yearDateHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		console.log(selectedYear);
	};
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selectedYear={filteredYear} onChangeFilter={yearDateHandler} />
				{props.expenses.map((expense) => (
					<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
				))}
			</Card>
		</div>
	);
};

export default Expenses;
