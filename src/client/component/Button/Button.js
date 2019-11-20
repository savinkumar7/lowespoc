import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch , useSelector} from 'react-redux';
import { DISPLAY_TO_CART, REMOVE_CART } from '../../actions/cartCount';


export default (props) => {

    const dispatch = useDispatch();
    const ADD_TO_CART = "Add to cart";
    const REMOVE_FROM_CART = "Remove from cart";
    const [buttonContext, setbuttonContext] = useState(ADD_TO_CART);
    const data = useSelector(state => state.count.count);
    const Button = styled.button.attrs({
        disabled : !data
    })`
        width : 110px;
        height : 35px;
        border: 1px solid #357ebd;
        font-size : 12px;
        margin : 2px;
        color: #fff;
        background-color: #337ab7;
        border-color: #2e6da4;
        pointer: hand;
      

        ${buttonContext == "Remove from cart" && css`
        background-color: #d9534f;
        border-color: #d43f3a;
        `};
    
    `;

    const changeButtonContext = () => {
        if (buttonContext === ADD_TO_CART) {
            setbuttonContext(REMOVE_FROM_CART);
            dispatch({ type: DISPLAY_TO_CART });
        }
        else {
            setbuttonContext(ADD_TO_CART);
            dispatch({ type: REMOVE_CART });
        }
    }

    return (

        <Button onClick = {changeButtonContext}>{buttonContext}</Button>

    )
}