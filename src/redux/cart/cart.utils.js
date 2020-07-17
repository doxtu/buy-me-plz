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

export const removeItemFromCart = (cartItems, cartItemToRemove) =>{
    const cartItemExists = !!cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    
    if(!cartItemExists) return cartItems;

    if(cartItemToRemove.quantity > 1){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
    } else {
        return cartItems.filter(cartItem =>
            cartItem.id !== cartItemToRemove.id    
        )
    }
}