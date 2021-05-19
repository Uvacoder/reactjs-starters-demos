import { HiTrash } from 'react-icons/hi';
import { GoalContainer, GoalList, GoalItem } from './TodoGoalsStyles';
const TodoGoals = (props) => {
	return (
		<div>
			<GoalList>
				{props.items.map((item) => (
					<GoalContainer key={item.id}>
						<GoalItem key={item.id} id={item.id}>
							{item.text}
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
