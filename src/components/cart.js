import { connect } from 'react-redux';
import { increaseQuantity, reduceQuantity, removeItem } from '../actions';
import CartList from './cartlist';



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