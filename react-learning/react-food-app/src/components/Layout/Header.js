import MealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
  return ( <>
  <header className={classes.header}>
    <h1>Rect food App</h1>
    <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
      <img src={MealsImage} alt="Delicious meals on a table"/>
    </div>
    
  </> );
}
 
export default Header;