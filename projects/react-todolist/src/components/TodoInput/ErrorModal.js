import Button from "./Button"

import classes from  './ErrorModal.module.css'
const ErrorModal = (props) => {
  return ( 
  <> 
  <div className={classes.backdrop} onClick={props.onError}/>
  <div className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onError}>Okay</Button>
    </footer>
  </div>
  </> );
}
 
export default ErrorModal;