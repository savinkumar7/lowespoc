export const ADD_TO_CART = 'add_to_cart';
export const REMOVE_FROM_CART = 'remove_from_cart'


export const addCartCount =(count) => dispatch =>{

    //const count = 0 ;
    dispatch({
        type : ADD_TO_CART,
        payload : count
    });     
}


export const removeCartCount =() => dispatch =>{

    const count = 0 ;
    dispatch({
        type : REMOVE_FROM_CART
    });     
}