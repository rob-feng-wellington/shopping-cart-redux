import { connect } from 'react-redux';
import { addItem } from '../actions';
import ProductList from './productlist';

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch) => ({
    onAddClick(item) {
        dispatch(addItem(item))
    }
});

const Products = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)

export default Products;