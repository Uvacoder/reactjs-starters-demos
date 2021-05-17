import { InputContainer, Button } from './TodoInputStyles';
const TodoInput = () => {
	return (
		<InputContainer>
			<label>
				<h2>Add Task ✍🏼</h2>
				<input type="text" />
			</label>

			<Button type="button">Add </Button>
		</InputContainer>
	);
};

export default TodoInput;
