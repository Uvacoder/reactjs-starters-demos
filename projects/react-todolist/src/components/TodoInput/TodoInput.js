import { useState } from 'react';
import { Form, InputContainer, Button } from './TodoInputStyles';
const TodoInput = (props) => {
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const [ isValid, setValid ] = useState(true);
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
			return;
		}

		props.onAddTodo(enteredGoal);
	};
	return (
		<Form onSubmit={submitHandler}>
			<InputContainer inValid={!isValid}>
				<label>
					<h2>Add Task ✍🏼</h2>
					<input
						type="text"
						onChange={addTodoHandler}
						placeholder={!isValid ? 'Enter your Goal' : 'Attend Google I/O'}
					/>
				</label>

				<Button type="submit">Add</Button>
			</InputContainer>
		</Form>
	);
};

export default TodoInput;
