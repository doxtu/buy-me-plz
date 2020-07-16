import React from 'react';

import { connect } from 'react-redux';
import { setHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg';

const CartIcon = ({ setHidden }) => (
    <div className='cart-icon' onClick={setHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    setHidden: () => dispatch(setHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);