import { cartActionTypes } from './actions'
import { addItemToCart, removeItemFromCart } from './utils';

const initialState = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.item)
            }
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.item)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.item.id)
            }
        case cartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}