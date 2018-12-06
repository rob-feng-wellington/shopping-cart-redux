import React from 'react';
import PropTypes from 'prop-types';

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

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onAddClick: PropTypes.func.isRequired
}

export default ProductItem;