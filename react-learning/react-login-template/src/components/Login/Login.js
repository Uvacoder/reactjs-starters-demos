import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/AuthContext';
import InputContent from '../UI/Input/InputContent';

const emailReducer = (state, action) => {
	const emailChecker = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (action.type === 'USER_INPUT') {
		return { value: action.value, isValid: action.value.match(emailChecker) };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.match(emailChecker) };
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

	const authContext = useContext(AuthContext);

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
		authContext.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				{/* <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div> */}
				<InputContent
					isValid={emailState.isValid}
					htmlFor="email"
					id="email"
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				>
					Email Address
				</InputContent>
				{/* <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div> */}
				<InputContent
					isValid={passwordState.isValid}
					htmlFor="password"
					id="password"
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				>
					Password
				</InputContent>
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
