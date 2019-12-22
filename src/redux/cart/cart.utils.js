export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exsistingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    console.log(cartItems);
    console.log(exsistingItem);

    if (exsistingItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            }
            : cartItem);
    }
    console.log(cartItems);
    return [
        ...cartItems, {
            ...cartItemToAdd,
            quantity: 1
        }
    ]
};