import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { addCartCount } from '../../actions'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART_COUNT } from '../../actions/cartCount';

export default (props) => {
    const [count , setCount] = useState(0);
    const dispatch = useDispatch();
    const QuantityButton = styled.button`
        width : 30px;
        height : 25px;
        background: none;
        border: none;
    `;
    const Quantity = styled.input`
    width : 25px;
    height : 25px;
    value : 5;
    text-align : center;
    `;

    const addQuantity =(totalQuantity) =>{
        if(count <= totalQuantity ){
            setCount(count + 1);
            dispatch({type: ADD_TO_CART_COUNT, value : count});
        }
      
      else
        alert("you are exceeding the quantity!!!!")
    };

    const removeQuantity =() =>{
        if(count > 0)
            setCount(count - 1);
            else
            alert("oops !! you cannot beyond this")
      }

    return (
        <React.Fragment>
            <QuantityButton  onClick ={() => removeQuantity()}>
                <FontAwesomeIcon icon={faMinus} size={"1x"} />
            </QuantityButton>
            <Quantity value = {count} type="text" defaultValue="0"/>
            <QuantityButton onClick ={() => addQuantity(props.totalQuantity)}>
                <FontAwesomeIcon icon={faPlus} size={"1x"} />
            </QuantityButton>
        </React.Fragment>
    )
}