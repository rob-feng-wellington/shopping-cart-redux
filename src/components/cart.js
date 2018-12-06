import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increaseQuantity, reduceQuantity, removeItem } from '../actions';

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

const mapStateToProps = (state) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    onPlusClick(name) {
        dispatch(increaseQuantity(name))
    },
    onMinusClick(name) {
        dispatch(reduceQuantity(name))
    },
    onRemoveClick(name) {
        dispatch(removeItem(name))
    }
})

const Cart = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartList)

export default Cart;