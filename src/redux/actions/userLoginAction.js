export const USER_LOGIN="USER_LOGIN";
export const USER_LOGOUT="USER_LOGOUT"
export const userName=(data)=>{
    return {
        type:USER_LOGIN,
        payload:data
    }
}

export const logout=(data)=>{
    return {
        type:USER_LOGOUT,
        payload:data
    }
}