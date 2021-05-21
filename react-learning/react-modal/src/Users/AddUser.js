import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser = (props) => {
	const [ enteredUsername, setEnteredUsername ] = useState('');
	const [ enteredUserAge, setEnteredUserAge ] = useState('');
	const userNameHandler = (e) => {
		const user = e.target.value;

		if (user.trim().length > 0) {
			setEnteredUsername(user);
		}
	};
	const userAgeHandler = (e) => {
		const age = e.target.value;
		setEnteredUserAge(age);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (enteredUsername.trim().length > 0 && enteredUserAge > 13) {
			setEnteredUsername('');
			setEnteredUserAge('');
			props.onAddValues(enteredUsername, enteredUserAge);
			return { enteredUsername, enteredUserAge };
		}
	};
	return (
		<Card className={classes.input}>
			<form onSubmit={submitHandler}>
				<label>
					<p>Username</p>
					<input type="text" value={enteredUsername} onChange={userNameHandler} placeholder="janetracy" />
				</label>
				<label>
					<p>Age (in years)</p>
					<input type="number" value={enteredUserAge} onChange={userAgeHandler} placeholder="20" />
				</label>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
