import React, { Component } from "react";
import { useSelector, useDispatch, connect } from 'react-redux';
import './index.css'
import ProductsList from './ProductList/ProductsList'
import { fetchProducts } from '../actions/index';
import {fetchFilters} from '../actions/filters';
import Header from './Header/Header';
import Accordian from './Accordian/Accordian';

class App extends Component {


    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchFilters();
    }

    renderUsers() {
        return this.props.products.map(product => {
            return <li key={product.id}>{product.productName}</li>
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="content-container">
                    <div className="filter">
                        <Accordian filtersList = {this.props.filters}/>
                        </div >
                    <div className="content">
                        <ProductsList productList={this.props.products} />
                    </div>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        filters : state.filters
    }
}

function loadData(store) {
    return store.dispatch(fetchProducts());
}

export { loadData };
export default connect(mapStateToProps, { fetchProducts , fetchFilters})(App)