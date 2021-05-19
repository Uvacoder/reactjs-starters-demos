import styled from 'styled-components';

export const GoalContainer = styled.div`margin-top: 3rem;`;

export const GoalList = styled.ul`margin-top: 3rem;`;

export const GoalItem = styled.li`
	display: flex;
	justify-content: space-between;
	list-style: none;
	width: 700px;
	margin-top: 2rem;
	padding: 2rem 5rem;
	background-color: #e0fbfc;
	box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.1);

	span {
		svg {
			font-size: 2.5rem;
			cursor: pointer;
		}
	}
`;

export const GoalCheck = styled.input`
	height: 1.5rem;
	width: 1.5rem;
	margin-right: 2rem;
	border: 1px solid #293241;
`;
