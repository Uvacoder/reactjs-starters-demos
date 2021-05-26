import styled from 'styled-components';

export const BackDrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.section`
	position: fixed;
	top: 30vh;
	left: 30%;
	width: 40%;
	z-index: 100;
	overflow: hidden;
	background-color: #e0fbfc;
	border-radius: 1rem;
	margin: 0 auto;
	@media (max-width: 767px) {
		left: calc(50% - 20rem);
		width: 40rem;
	}
`;

export const ModalHeader = styled.div`
	background: #293241;
	padding: 1rem;
`;

export const ModalTitle = styled.h2`
	color: #fefefe;
	font-size: 2rem;
`;

export const ModalContent = styled.div`padding: 1rem;`;

export const ModalMessage = styled.h3`font-weight: 400;`;

export const ModalButtonSection = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: flex-end;
`;
