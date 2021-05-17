import { GoalContainer, GoalList, GoalItem } from './TodoGoalsStyles';
const TodoGoals = (props) => {
	return (
		<div>
			<GoalList>
				{props.items.map((item) => (
					<GoalContainer key={item.id}>
						<GoalItem>{item.text}</GoalItem>
					</GoalContainer>
				))}
			</GoalList>
		</div>
	);
};

export default TodoGoals;
