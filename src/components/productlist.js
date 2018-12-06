import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './productitem';

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

export default ProductList;