import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import {FaShoppingCart,FaUserAlt} from "react-icons/fa";
import {AiTwotoneShop} from "react-icons/ai"
const image=require("../../image/images.png")

export const Navbar = () => {
  const cartItem=useSelector((store)=>store.cart.cart);
  const userName=useSelector((store)=>store.userName.userName);
  const userLogin=JSON.parse(localStorage.getItem("user-in-app"));
  console.log(userLogin)
  console.log(userName)
  return (
    <div className='nav'>
        <div className='logo'><Link to="/">
          <img className='img' src={image} alt="Logo"/>
        </Link></div>
        <div className='shop'><Link to="/shop"><AiTwotoneShop/></Link></div>
        <div className='cart'><Link to="/cart"><FaShoppingCart/><span style={{color:"red",fontSize:"19px"}}>{cartItem.length>0?cartItem.length:""}</span></Link></div>
        <div className='register'><Link to={userLogin || userName ? "/user-profile":"/register"}>{userLogin || userName?userLogin.first_name || userName:<FaUserAlt/>}</Link></div>
    </div>
  )
}
