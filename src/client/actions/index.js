import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => async dispatch =>{
    const res = await axios.get('http://localhost:8000/public/data.json');

    dispatch ({
        type : FETCH_PRODUCTS,
        payload :res
    });
};
