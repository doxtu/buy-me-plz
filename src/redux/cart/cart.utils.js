export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const cartItemExists = !!cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    
    if(!cartItemExists) return [...cartItems, {...cartItemToAdd, quantity: 1}];

    return cartItems.map(
        cartItem =>
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
    );
}