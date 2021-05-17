import TodoInput from '../TodoInput/TodoInput';
import { TodoContainer } from './FormStyles';

const Form = () => {
	return (
		<TodoContainer>
			<form>
				<TodoInput />
			</form>
		</TodoContainer>
	);
};

export default Form;
