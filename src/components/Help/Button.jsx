import React, { useEffect } from 'react'
import "./Button.css"
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const Button = () => {
    const [btn_class,setBtn_class]=useState("button");
    const navigate=useNavigate()
    const user=useSelector((store)=>store.userDetails.user)
    useEffect(()=>{
        if(user.length!==0){
            setBtn_class("not_button")
        }
    },[user])
  return (
    <div>
        <button className={btn_class} onClick={()=>{
            navigate("/user-need")
        }}>Help</button>
    </div>
  )
}
