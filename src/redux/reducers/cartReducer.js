import { CART, CART_REMOVE } from "../actions/cartAction"

const init={
    cart:[]
}


export const cartReducer=(state=init,{type,payload})=>{
    //console.log(payload);
    switch(type){
        case CART:
            if(payload===undefined){
                return {...state,cart:[]}
            }
            return {...state,cart:[...state.cart,payload]}
        case CART_REMOVE:
            return {...state,cart:[...state.cart.filter((el)=>el.id!==payload)]}
        default:
            return state
    }
}