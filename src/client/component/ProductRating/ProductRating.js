import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'



export default ({numberOfStar, productRating}) =>{
    const Ratingstar = styled.div `
    height: 10px;
    width: 250px;
    margin : 5px;
    margin-bottom : 10px;
    `;

    const NumberofRating = styled.span `
    width : 20px;
    height: 10px;
    `;

    const Stars = (numberOfStar) =>{
        const star = [];
        for (let i = 0 ; i < numberOfStar ;i ++){
            star.push ( <FontAwesomeIcon icon ={faStar} size = {"1x"} style ={{color :"orange"}}/>)
        }
        return star;
    }

    return(
        <Ratingstar>
            {Stars(numberOfStar)}     
            (<NumberofRating>{productRating}</NumberofRating>)   
        </Ratingstar>
    ) 
}