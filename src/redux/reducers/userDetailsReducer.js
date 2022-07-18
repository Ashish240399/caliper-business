import { USER_DETAILS } from "../actions/userDetailsAction"

const init={
    user:[]
}

export const userReducer=(state=init,{type,payload})=>{
    switch(type){
        case USER_DETAILS:
            return {...state,user:payload}
        default:
            return state
    }
}