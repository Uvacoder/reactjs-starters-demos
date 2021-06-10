import CartContext from './CartContext';

const CartProvider = (props) => {
	const addItemToCartHandler = (item) => {};
	const removeItemFromCartHandler = (id) => {};

	const cartContext = {
		items: [],
		totalAmount: 0,
		addCartItem: addItemToCartHandler,
		removeCartItem: removeItemFromCartHandler
	};
	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
