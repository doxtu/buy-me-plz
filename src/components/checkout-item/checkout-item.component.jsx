import React from 'react';

import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItemFromCart, removeItemFromCart, addItemToCart}) => {
    const {name, imageUrl, quantity, price} = cartItem;
    return (<div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>removeItemFromCart(cartItem)}>&#9756;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>addItemToCart(cartItem)}>&#9758;</div>
        </span>
        <span className='price'>{`$${price}`}</span>
        <div className='remove-button' onClick={()=>clearItemFromCart(cartItem)}>&#9760;</div>
    </div>)
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItemFromCart: item => dispatch(removeItem(item)),
    addItemToCart: item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);