export const addItem = (item) => {
    const newItem = {...item, quantity: 1};
    return {
        type: 'ADD',
        item: newItem
    }
}

export const increaseQuantity = (name) => ({
    type: 'INCREASE',
    name
})

export const reduceQuantity = (name) => ({
    type: 'REDUCE',
    name
})

export const removeItem = (name) => ({
    type: 'REMOVE',
    name
})