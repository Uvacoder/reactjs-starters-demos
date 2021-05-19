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

	const addTodoHandler = (enteredTodo) => {
		setGoals((prevGoals) => {
			const goals = [ ...prevGoals ];
			goals.unshift({ text: enteredTodo, id: Math.random().toString() });
			console.log(goals);
			return goals;
		});
	};
	const deleteItemHandler = (itemID) => {
		setGoals((prevGoals) => {
			const deletedGoals = prevGoals.filter((goals) => {
				return goals.id !== itemID;
			});
			return deletedGoals;
		});
	};
	let content = <p style={{ textAlign: 'center', paddingTop: '50px' }}>No goals found. Add new goals</p>;
	if (goals.length > 0) {
		content = <TodoGoals items={goals} onDeleteItem={deleteItemHandler} />;
	}
	return (
		<Container>
			<GlobalStyles />
			<h1>My TodoList 📖</h1>
			<TodoInput onAddTodo={addTodoHandler} />
			{content}
		</Container>
	);
};

export default App;
