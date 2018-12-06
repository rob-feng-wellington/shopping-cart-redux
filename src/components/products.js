import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../actions';

const ProductList = ({products, onAddClick}) => (
    <ul style={{
        width: '100%'
    }}>
        <h3>Products list</h3>
        {
            products.map(product => (
                <ProductItem
                    key={product.name}
                    {...product}
                    onAddClick={onAddClick}
                />
            ))
        }     
    </ul>
)

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
    onAddClick: PropTypes.func.isRequired
}

const ProductItem = ({name, price, onAddClick}) => (
    <li style={{
        display: 'flex',
        justifyContent: 'space-around'
    }}>
        <span>{name}</span>
        <span>{price.toFixed(2)}</span>
        <span 
            onClick={() => onAddClick({name, price})}
            style={{
                cursor: 'pointer'
            }}>
            ADD
        </span>
    </li>
)

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