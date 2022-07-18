export const DISCOUNT="DISCOUNT";

export const discountAmount=(data)=>{
    return{
        type:DISCOUNT,
        payload:data
    }
}