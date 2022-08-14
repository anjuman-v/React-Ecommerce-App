import { combineReducers } from "redux";
import { ActionTypes } from "../actionTypes/action-types";

const initialState = {
    products : [],
};

export const productReducer = (state = initialState, { type, payload}) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { 
                ...state,
                products:payload
            };
            default:
                return state;
    }
}

export const selectedProductsReducer = (state = {}, { type, payload}) => {

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { 
                ...state,
                ...payload
            };

            case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};

            default:
                return state;
    }
}


const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,
})

export default reducers;