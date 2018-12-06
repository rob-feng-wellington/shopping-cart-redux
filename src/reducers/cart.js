const cart = (state=[], action) => {
    const remove = (cart, name) => {
        const index = cart
                        .map(i => i.name)
                        .indexOf(name);
        return [
            ...cart.slice(0, index),
            ...cart.slice(index+1)
        ]
    }
    const increase = (cart, name) => {
        return cart.map(item => {
            return item.name === name ?
                    {...item, quantity: item.quantity + 1}
                    :
                    item
        })
    }
    switch(action.type) {
        case 'ADD':
            const ifExist = state.filter(item => item.name === action.item.name).length > 0;
            return ifExist ?
                    increase(state, action.item.name)
                    :
                    [
                        ...state,
                        action.item
                    ]
        case 'INCREASE':
            return increase(state, action.name);
        case 'REDUCE':
            const currentQuantity = state.filter(item => item.name === action.name)[0].quantity;
            return currentQuantity > 1 ?
                    state.map(item => {
                        return item.name === action.name ?
                                {...item, quantity: item.quantity -1}
                                :
                                item
                    })
                    :
                    remove(state, action.name);
        case 'REMOVE':
            return remove(state, action.name);
        default:
            return state;

    }
}

export default cart;