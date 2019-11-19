import styled from 'styled-components';
import React ,{useState} from 'react';
import ProductRating from '../ProductRating/ProductRating'
import Button from '../Button/Button';
import AddQuantity from '../AddQuantity/AddQuantity'

export default (props) =>{

    const Container = styled.div `
    border : 1px solid black;
    height:350px;
    width:260px;
    position:relative;
    `;

    const Image = styled.img `
    width: 160px;
    margin-left: auto;
    margin-right: auto;
    height: 200px;
    `;

    const Title = styled.div `
    font-color: grey;
    font-size: 17px;
    padding-left: 3px;
    font-weight : bold;
    `;

    const Descprition = styled.div `
    font-size: 10px;
    padding-left: 5px;
    `;

    const Price = styled.div `
    font-size: 15px;
    padding-left: 3px;
    `;
 
    return (
        <Container >
            <Image src = {props.product.thumbNail}/>
            <Title>{props.product.productName}</Title>
            <Descprition>{props.product.productDesc}</Descprition>
            <ProductRating numberOfStar = {props.product.noOfRating } productRating = {props.product.productRating}/>
            <Price >{props.product.productPrice}</Price>
            <Button />
            <AddQuantity totalQuantity = {props.product.productQty} />
            </Container>

    )
}