import { useState } from 'react';
import { HiTrash, HiCheckCircle } from 'react-icons/hi';
import { GoalContainer, GoalList, GoalItem, ItemContent } from './TodoGoalsStyles';
const TodoGoals = (props) => {
	const [ isChecked, setChecked ] = useState(false);
	const checkedHandler = (item) => {};

	return (
		<div>
			<GoalList>
				{props.items.map((item) => (
					<GoalContainer key={item.id}>
						<GoalItem key={item.id} id={item.id}>
							<ItemContent checkedItem={!isChecked}>
								<HiCheckCircle onClick={() => checkedHandler(item.text)} />
								{item.text}
							</ItemContent>

							<span onClick={() => props.onDeleteItem(item.id)}>
								<HiTrash />
							</span>
						</GoalItem>
					</GoalContainer>
				))}
			</GoalList>
		</div>
	);
};

export default TodoGoals;
