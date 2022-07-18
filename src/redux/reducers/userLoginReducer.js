import { USER_LOGIN, USER_LOGOUT } from "../actions/userLoginAction"

const init={
    userName:""
}

export const userLoginReducer=(state=init,{type,payload})=>{
    switch(type){
        case USER_LOGIN:
            return {...state,userName:payload}
        case USER_LOGOUT:
            return {...state,userName:payload}
        default:
            return state
    }
}