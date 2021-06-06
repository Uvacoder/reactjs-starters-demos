import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
	const [ isLoggedIn, setLoggedIn ] = useState(false);

	useEffect(() => {
		const isUserLoggedIn = localStorage.getItem('loggedIn');
		if (isUserLoggedIn === 'UserLoggedIn') {
			setLoggedIn(true);
		}
	}, []);

	const loginHandler = (email, password) => {
		localStorage.setItem('loggedIn', 'UserLoggedIn');
		setLoggedIn(true);
	};
	const logoutHandler = () => {
		localStorage.removeItem('loggedIn');
		setLoggedIn(false);
	};
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
