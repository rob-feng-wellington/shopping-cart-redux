import { combineReducers } from 'redux';
import cart from './cart';

const defaultProducts = [
    {
        name: 'Sledgehammer',
        price: 125.75
    },
    {
        name: 'Axe',
        price: 190.50
    },
    {
        name: 'Bandsaw',
        price: 562.13
    },
    {
        name: 'Chisel',
        price: 12.9
    },
    {
        name: 'Hacksaw',
        price: 18.45
    }
];

const products = ( state = defaultProducts ) => {
    return state
}


const rootReducer = combineReducers({
    products,
    cart
});

export default rootReducer;