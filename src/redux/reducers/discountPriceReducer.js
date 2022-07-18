import { DISCOUNT } from "../actions/discountPriceAction"

const init={
    amount:0
}

export const discountReducer=(state=init,{type,payload})=>{
    switch(type){
        case DISCOUNT:
            return {...state,amount:payload}
        default:
            return state
    }
}