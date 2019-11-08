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
    debugger;
    return products.map(product =>{
        return (
            <div>
                <li key={product.id}>{product.productName}</li>
                <img src ={product.thumbNali} alt={product.thumbNali} />
            </div>
        
        )
    });
};

return(
        <ul>{renderProduct()}</ul>
)
}

function loadData(store){
    return store.dispatch({type : FETCH_PRODUCTS});
}

export {loadData};
export default Products;