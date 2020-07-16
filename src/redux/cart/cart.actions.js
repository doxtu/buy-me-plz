import { CartActionTypes } from './cart.types';

export const setHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});