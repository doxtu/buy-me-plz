import React from 'react';

import { connect } from 'react-redux';
import { setHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg';

const CartIcon = ({ setHidden, itemCount }) => (
    <div className='cart-icon' onClick={setHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> {itemCount} </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    setHidden: () => dispatch(setHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);