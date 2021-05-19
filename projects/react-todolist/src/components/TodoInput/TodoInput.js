import { useState } from 'react';
import { Form, InputContainer, Button } from './TodoInputStyles';
const TodoInput = (props) => {
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const addTodoHandler = (e) => {
		const addedTodo = e.target.value;
		setEnteredGoal(addedTodo);
		console.log(addedTodo);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		props.onAddTodo(enteredGoal);

		console.log(enteredGoal);
	};
	return (
		<Form onSubmit={submitHandler}>
			<InputContainer>
				<label>
					<h2>Add Task ✍🏼</h2>
					<input type="text" onChange={addTodoHandler} />
				</label>

				<Button type="button" onClick={submitHandler}>
					Add
				</Button>
			</InputContainer>
		</Form>
	);
};

export default TodoInput;
