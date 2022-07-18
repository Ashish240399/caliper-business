export const NFT="NFT";
export const DUTCH="DUTCH";
export const DWC="DWC"
export const MICRO="MICRO"
export const nft=(data)=>{
    return {
        type:NFT,
        payload:data
    }
}

export const ducth=(data)=>{
    return {
        type:DUTCH,
        payload:data
    }
}

export const dwc=(data)=>{
    return {
        type:DWC,
        payload:data
    }
}

export const micro=(data)=>{
    return {
        type:MICRO,
        payload:data
    }
}