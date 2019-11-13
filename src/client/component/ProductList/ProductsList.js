import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import ProductDetail from '../ProductDetail/ProductDetail'

const ProductsList =(props) =>{

    return (
        <React.Fragment>
        {props.productList.map(product => <ProductDetail product ={product} key ={product.id}/>)}
        </React.Fragment>
    )
}

export default ProductsList