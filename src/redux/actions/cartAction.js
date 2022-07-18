export const CART="CART";
export const CART_REMOVE="CART_REMOVE"
export const cart=(cartItem)=>{
    
    return{
        type:CART,
        payload:cartItem
    }
}

export const removeCart=(id)=>{
    return{
        type:CART_REMOVE,
        payload:id
    }
}