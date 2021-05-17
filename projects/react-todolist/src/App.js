import { useState } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import GlobalStyles from './GlobalStyles';
import TodoGoals from './components/TodoGoals/TodoGoals';
import { Container } from './components/ContainerStyles';

const App = () => {
	const [ goals, setGoals ] = useState([
		{ text: 'Learning React', id: 'j1' },
		{ text: 'Buy Milk and Fruits', id: 'j2' }
	]);
	return (
		<Container>
			<GlobalStyles />
			<h1>My TodoList 📖</h1>
			<TodoInput />
			<TodoGoals items={goals} />
		</Container>
	);
};

export default App;
