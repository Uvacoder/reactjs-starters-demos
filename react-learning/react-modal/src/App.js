import { useState } from 'react';
import AddUser from './Users/AddUser';
import UserList from './List/UserList';

const App = () => {
	const [ UserValues, setUserValues ] = useState([
		{ name: 'Tracy', age: 23, id: 'j1' },
		{ name: 'Yoongi', age: 28, id: 'j2' }
	]);

	const addUserValues = (userName, userAge) => {
		setUserValues((prevUsersList) => {
			const addedValues = [ ...prevUsersList ];
			addedValues.unshift({ name: userName, age: userAge, id: Math.random().toString() });

			console.log(addedValues);
			return addedValues;
		});
	};
	return (
		<div>
			<h1>React Modal</h1>
			<AddUser onAddValues={addUserValues} />
			<UserList values={UserValues} />
		</div>
	);
};

export default App;
