export const ADD_TO_CART_COUNT = 'add_to_cart';
export const DISPLAY_TO_CART = 'display_to_cart'
export const REMOVE_CART = 'remove_cart'


export const addCartCount = (count) => dispatch => {

    dispatch({
        type: ADD_TO_CART_COUNT,
        payload: count
    });
}


export const displayToCart = () => dispatch => {

    dispatch({
        type: DISPLAY_TO_CART
    });
}

export const removeFromCart = () => dispatch => {

    dispatch({
        type: REMOVE_CART
    });
}