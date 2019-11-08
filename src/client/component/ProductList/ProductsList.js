import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import './ProductList.css'

const ProductsList =(props) =>{

    return (
        <div className ="gridContainer">
           {props.productList.map(product => 
            <div key ={product.id}>
                <img src ={product.thumbNail} alt ="productImage" /><br />
                <span>{product.productName}</span><br />
                <span>{product.productDesc}</span><br />
                <span>*****({product.productRating})</span><br />
                <span>{product.productPrice}</span><br />
               <div style= {{marginbottom: '1px'}}><button type="button" className="btn btn-primary">Add To Cart</button> </div>
            </div>
            )}
        </div>
    )
}

export default ProductsList