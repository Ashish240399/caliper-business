import { BANNER, HYDROPONIC } from "../actions/homeAction"

const init={
    hydro:[],
    banner:[]
}

export const homeReducer=(state=init,{type,payload})=>{
    switch (type){
        case HYDROPONIC:
            return {...state,hydro:payload};
        case BANNER:
            return {...state,banner:payload}
        default:
            return state
    }
}
