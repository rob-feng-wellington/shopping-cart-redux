import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './cartitem';

const CartList = ({ cart, onPlusClick, onMinusClick, onRemoveClick}) => {
    const getTotal = () => {
        return cart.reduce((total, current) => {
            return total + current.quantity * current.price
        }, 0);
    }
    if( cart.length > 0 ) {
        return (   
            <ul style={{
                width: '100%'
            }}>
                <h3>Shopping Cart</h3>
                <h4>{`Total: ${getTotal().toFixed(2)}`}</h4>
                {
                    cart.map(item => (
                        <CartItem 
                            key={item.name} 
                            {...item} 
                            onPlusClick={onPlusClick} 
                            onMinusClick={onMinusClick} 
                            onRemoveClick={onRemoveClick} 
                        />
                    ))
                }
            </ul>
        )
    } else {
        return <div>No items in cart</div>
    }   
}

CartList.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onPlusClick: PropTypes.func.isRequired,
    onMinusClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

export default CartList;