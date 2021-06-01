import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.value, isValid: action.value.includes('@') };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') };
	}
	return { value: '', isValid: false };
};
const passwordReducer = (state, action) => {
	if (action.type === 'USER_PASSWORD') {
		return { value: action.value, isValid: action.value.trim().length > 6 };
	}
	if (action.type === 'PASSWORDINPUT_BLUR') {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: '', isValid: false };
};

const Login = (props) => {
	const [ formIsValid, setFormIsValid ] = useState(false);

	const [ emailState, dispatchEmail ] = useReducer(emailReducer, { value: '', isValid: null });
	const [ passwordState, dispatchPassword ] = useReducer(passwordReducer, { value: '', isValid: null });

	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	useEffect(
		() => {
			const userTimeout = setTimeout(() => {
				setFormIsValid(emailIsValid && passwordIsValid);
			}, 500);

			return () => {
				clearTimeout(userTimeout);
			};
		},
		[ emailIsValid, passwordIsValid ]
	);

	const emailChangeHandler = (e) => {
		dispatchEmail({ type: 'USER_INPUT', value: e.target.value });
		//	setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const passwordChangeHandler = (e) => {
		dispatchPassword({ type: 'USER_PASSWORD', value: e.target.value });

		//	setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'INPUT_BLUR' });
	};

	const validatePasswordHandler = () => {
		dispatchEmail({ type: 'PASSWORDINPUT_BLUR' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
