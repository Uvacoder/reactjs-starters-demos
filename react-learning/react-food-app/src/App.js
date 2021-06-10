import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {
	const [ cartIsShown, setCartIsShown ] = useState(false);

	const showHandler = () => {
		setCartIsShown(true);
	};

	const hideHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onHideCart={hideHandler} />}
			<Header onShowCart={showHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
};

export default App;
