import React, { Component } from "react";
import { useSelector, useDispatch, connect } from 'react-redux';
import { FETCH_PRODUCTS } from '../actions';
import ProductsList from './ProductList/ProductsList'
import { fetchProducts } from '../actions'
import Header from './Header/Header';

class App extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderUsers() {
        return this.props.products.map(product => {
            return <li key={product.id}>{product.productName}</li>
        });
    }

    render() {
        return (
            <div className="page bg-white" id="petratings">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 bg-white">
                        
                                <Header />

                                <ProductsList productList={this.props.products} />
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

function loadData(store) {
    return store.dispatch(fetchProducts());
}

export { loadData };
export default connect(mapStateToProps, { fetchProducts })(App)