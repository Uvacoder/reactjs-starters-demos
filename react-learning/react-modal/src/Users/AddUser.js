import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const [ enteredUsername, setEnteredUsername ] = useState('');
	const [ enteredUserAge, setEnteredUserAge ] = useState('');
	const [ error, setError ] = useState();

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

		setError({
			title: 'Error Occured',
			message: 'Invalid input, fill you name and age. Ensure you are 13 years and above'
		});
	};

	const errorHandler = () => {
		setError(null);
	};
	return (
		<>
			{error && <ErrorModal title={error.title} message={error.message} onError={errorHandler} />}
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
		</>
	);
};

export default AddUser;
