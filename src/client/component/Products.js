import React from "react";
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FETCH_PRODUCTS} from '../actions';

function Products() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

useEffect(() =>{
    dispatch({type : FETCH_PRODUCTS});
}, []);

const renderProduct = () => {
    return products.map(product =>{
        return <li key={product.id}>{product.name}</li>
    });
};

return(
        <ul>
            {renderProduct()}
        </ul>
)
}

export default Products;