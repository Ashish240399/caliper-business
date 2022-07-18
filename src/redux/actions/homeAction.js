export const HYDROPONIC="HYDROPONIC";
export const BANNER="BANNER"

export const hydroponicData=(data)=>{
    return {
        type:HYDROPONIC,
        payload:data
    }
}

export const banner=(banner)=>{
    return {
        type:BANNER,
        payload:banner
    }
}