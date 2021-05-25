import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';
const ErrorModal = (props) => {
	const BackDrop = props => {
		return <div className={classes.backdrop} onClick={props.onError} />
	}

	const ModalOverlay = props =>{
		return <Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.onError}>Okay</Button>
				</footer>
			</Card>
	}
	return (
		<>
		{ReactDOM.createPortal(<BackDrop onError={props.onError}/>, document.getElementById('backdrop-root')) }
		{ReactDOM.createPortal(<ModalOverlay onError={props.onError} title={props.title} message={props.message}/>, document.getElementById('modal-root'))}
			
		</>
	);
};

export default ErrorModal;
