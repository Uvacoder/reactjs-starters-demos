import styled from 'styled-components';

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
	text-decoration: ${(props) => (props.checkedItem ? 'line-through' : '')};
	background-color: ${(props) => (props.checkedItem ? 'rgba(0,0,0,0.1)' : '')};

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

export const ItemContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		cursor: pointer;
		margin-right: 2rem;
		font-size: 2.3rem;
	}
`;

export const Footer = styled.div`
	margin-top: 3rem;
	padding: 2rem 5rem;
	background-color: #e0fbfc;
	box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-around;
`;

export const Button = styled.button`
	padding: 1rem 2rem;
	background-color: ${(props) => (props.primary ? '#293241' : ' #3d5a80')};
	border-radius: 1rem;
	border: none;
	color: #fefefe;

	&:hover {
		background-color: ${(props) => (props.primary ? '#3d5a80' : ' #293241')};
	}
`;
