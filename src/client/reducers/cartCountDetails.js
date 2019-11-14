import { ADD_TO_CART_COUNT } from '../actions/cartCount';
import { DISPLAY_TO_CART } from '../actions/cartCount';
import { REMOVE_CART } from '../actions/cartCount'

const initialState = {
    count: 0,
    displayCount: 0
};

export default (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case ADD_TO_CART_COUNT:

            newState.count = action.value + 1;
            break;
        case DISPLAY_TO_CART:
            newState.displayCount = newState.count;
            break;

        case REMOVE_CART:
            newState.count = 0;
            newState.displayCount = 0;
            break;
    }
    return newState;
}