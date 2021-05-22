import { useState } from 'react';
import { HiTrash, HiCheckCircle } from 'react-icons/hi';
import { Button, Footer, GoalList, GoalItem, ItemContent } from './TodoGoalsStyles';

import './Todo.css';
const TodoGoals = (props) => {
	const [ isChecked, setChecked ] = useState(false);
	const checkedHandler = () => {
		setChecked(true);
	};
	const UnCheckHandler = () => {
		setChecked(false);
	};

	return (
		<div>
			<GoalList>
				{props.items.map((item) => (
					<GoalItem key={item.id} checkedItem={isChecked}>
						<ItemContent>
							{/* <HiCheckCircle onClick={() => checkedHandler(item.text)} /> */}

							<span>{item.text}</span>
						</ItemContent>

						<span onClick={() => props.onDeleteItem(item.id)}>
							<HiTrash />
						</span>
					</GoalItem>
				))}
			</GoalList>

			<Footer>
				<Button primary onClick={checkedHandler}>
					{' '}
					Check all
				</Button>
				<Button onClick={UnCheckHandler}> Uncheck all</Button>
			</Footer>
		</div>
	);
};

export default TodoGoals;
