import classes from './InputContent.module.css';
const InputContent = (props) => {
	return (
		<div className={`${classes.control} ${props.isValid === false ? 'classes.invalid' : ''}`}>
			<label htmlFor={props.htmlFor || 'input'}>{props.children}</label>
			<input
				type={props.type || 'text'}
				id={props.id || 'input'}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	);
};

export default InputContent;
