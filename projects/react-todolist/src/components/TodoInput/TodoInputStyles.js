import styled from 'styled-components';

export const Form = styled.form`width: 700px;`;
export const InputContainer = styled.section`
	padding: 2rem 5rem;
	background-color: #e0fbfc;
	box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.1);
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: start;
	margin-top: 3rem;

	& label {
		font-size: 2.5rem;
		font-weight: 600;
	}

	& input {
		border: none;
		border-bottom: 2px solid #293241;
		background-color: transparent;
		margin-bottom: 2rem;
		width: 400px;
		padding: 1rem 2rem;
		font-size: 1.8rem;
	}
`;

export const Button = styled.button`
	background-color: #293241;
	height: 5rem;
	width: 5rem;
	padding: 2rem;
	border-radius: 50%;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	cursor: pointer;
`;
