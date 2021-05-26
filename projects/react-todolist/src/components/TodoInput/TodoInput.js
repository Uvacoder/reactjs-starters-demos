import { useState } from 'react';
import ErrorModal from './ErrorModal';
import { Form, InputContainer, Button } from './TodoInputStyles';
const TodoInput = (props) => {
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const [ isValid, setValid ] = useState(true);
	const [ error, setError ] = useState();
	const addTodoHandler = (e) => {
		const addedTodo = e.target.value;
		if (e.target.value.trim().length > 0) {
			setValid(true);
		}
		setEnteredGoal(addedTodo);
		console.log(addedTodo);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (enteredGoal.trim().length === 0) {
			setValid(false);
			setError({ title: 'Error Occurred', message: 'Add a task or a goal' });
			return;
		}

		props.onAddTodo(enteredGoal);
		setEnteredGoal('');
	};
	const errorHandle = () => {
		setError(null);
	};
	return (
		<>
			{error && <ErrorModal title={error.title} message={error.message} onError={errorHandle} />}
			<Form onSubmit={submitHandler}>
				<InputContainer inValid={!isValid}>
					<label>
						<h2>Add Task ✍🏼</h2>
						<input
							type="text"
							onChange={addTodoHandler}
							value={enteredGoal}
							placeholder={!isValid ? 'Enter your Goal' : 'Attend Google I/O'}
						/>
					</label>

					<Button type="submit">Add</Button>
				</InputContainer>
			</Form>
		</>
	);
};

export default TodoInput;
