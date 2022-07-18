import { DUTCH, DWC, MICRO, NFT } from "../actions/productAction"

const init={
    nft:[],
    dutch:[],
    dwc:[],
    micro:[]
}

export const productReducer=(state=init,{type,payload})=>{
    switch (type){
        case NFT:
            return {...state,nft:payload}
        case DUTCH:
            return {...state,dutch:payload}
        case DWC:
            return {...state,dwc:payload}
        case MICRO:
            return {...state,micro:payload}
        default:
            return state
    }
}