import { TodoButton } from './Button.styles';
const Button = (props) => {
	return (
		<TodoButton onClick={props.onClick} type={props.type || 'button'}>
			{props.children}
		</TodoButton>
	);
};

export default Button;
