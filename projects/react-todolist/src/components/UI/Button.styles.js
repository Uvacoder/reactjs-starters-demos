import styled from 'styled-components';

export const TodoButton = styled.button`
	padding: .5rem 1rem;
	border-radius: 1rem;
	background-color: #293241;
	color: #fff;
	border: none;
	margin-top: 1rem;
	box-shadow: 0 1px 8px rgba(41, 50, 65, 0.301);
	cursor: pointer;

	&:hover {
		transform: translateY(-2px) scale(1.04);
		transition: all .3s ease-in;
	}

	&:active {
		transform: translateY(2px);
		transition: all .3s ease-in-out;
	}
`;
