import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, quantity, onPlusClick, onMinusClick, onRemoveClick}) => (
    <li style={{
        display: 'flex',
        justifyContent: 'space-around'
    }}>
        <span>{name}</span>
        <span>{price.toFixed(2)}</span>
        <span 
            onClick={() => onPlusClick(name)}
            style={{
                cursor: 'pointer'
            }}>
            &#43;
        </span>
        <span>{quantity}</span>
        <span 
            onClick={() => onMinusClick(name)}
            style={{
                cursor: 'pointer'
            }}>
            &#8722;
        </span>
        <span>{(price * quantity).toFixed(2)}</span>
        <span
            style={{
                cursor: 'pointer'
            }} 
            onClick={() => onRemoveClick(name)}>
            REMOVE
        </span>
    </li>
)

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onPlusClick: PropTypes.func.isRequired,
    onMinusClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

export default CartItem;