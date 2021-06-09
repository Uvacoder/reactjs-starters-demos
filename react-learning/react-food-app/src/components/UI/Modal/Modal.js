import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const BackdropModal = (props) => {
		return <div className={classes.backdrop}/>;
	};
const ModalContainer =(props)=>{
    return (
      <div className={classes.modal}>
        <div className={classes.content}>
          {props.children}
        </div>
      </div>
    )
}
const PortalElement = document.getElementById('overlays');

const Modal =(props)=>{
  
  return(
    <>
    {ReactDOM.createPortal(<BackdropModal/>, PortalElement)}
    {ReactDOM.createPortal(<ModalContainer>{props.children}</ModalContainer>, PortalElement)}
    </>
  )
}

export default Modal;