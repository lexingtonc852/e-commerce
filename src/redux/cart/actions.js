export function toggleCartHidden(){
    return{
        type: cartActionTypes.TOGGLE_CART_HIDDEN
    }
}

export function addItem(item){
    return{
        type: cartActionTypes.ADD_ITEM,
        item
    }
}

export function removeItem(item){
    return{
        type: cartActionTypes.REMOVE_ITEM,
        item
    }
}

export function clearItemFromCart(item){
    return{
        type: cartActionTypes.CLEAR_ITEM_FROM_CART,
        item
    }
}

export const cartActionTypes = {
    TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
    ADD_ITEM: "ADD_ITEM",
    CLEAR_ITEM_FROM_CART: "CLEAR_ITEM_FROM_CART",
    REMOVE_ITEM: "REMOVE_ITEM"
}