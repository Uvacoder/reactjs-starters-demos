import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../UI/Button';

import {
	BackDrop,
	Modal,
	ModalHeader,
	ModalTitle,
	ModalContent,
	ModalMessage,
	ModalButtonSection
} from './ErrorModalstyles';
const ErrorModal = (props) => {
	const BackDropContainer = props =>{
		return <BackDrop onClick={props.onError} />
	}
	const ModalContainer = props => {
		return(
			<Modal>
				<ModalHeader>
					<ModalTitle>{props.title}</ModalTitle>
				</ModalHeader>
				<ModalContent>
					<ModalMessage>{props.message}</ModalMessage>
				</ModalContent>
				<ModalButtonSection>
					<Button onClick={props.onError}>Okay</Button>
				</ModalButtonSection>
			</Modal>
		)
	}
	return (
		<>
		{ReactDOM.createPortal(<BackDropContainer onError={props.onError}/>, document.getElementById('backdrop-root'))}
		{ReactDOM.createPortal(<ModalContainer onError={props.onError} title={props.title} message={props.message}/>, document.getElementById('modal-root'))}		
			
		</>
	);
};

export default ErrorModal;
