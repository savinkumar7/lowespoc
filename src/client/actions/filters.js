import axios from 'axios';


export const FETCH_FILTERS = 'FETCH_FILTERS';
export const fetchFilters = () => async dispatch =>{
    const res = await axios.get('http://localhost:8000/public/filter.json');

    dispatch({
        type : FETCH_FILTERS,
        payload : res
    });
};