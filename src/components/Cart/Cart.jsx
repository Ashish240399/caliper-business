import React, { useState } from 'react'
import "./Cart.css"
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { removeCart } from '../../redux/actions/cartAction'
import { Button } from '../Help/Button'
import { discountAmount } from '../../redux/actions/discountPriceAction'

export const Cart = () => {
  const [discount,setDiscount]=useState();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cartItem=useSelector((store)=>store.cart.cart);
  console.log(cartItem)
  let sum=0;
  for(var i=0;i<cartItem.length;i++){
    sum+=cartItem[i].price;
  }
  if(discount){
    if(discount==="Hydro30"){
      sum=(sum*(70/100)).toFixed(2);
    }
  }
  return (
    <div>
    <Button/>
    <div className='Cart-page'>
    
      {cartItem && cartItem.map((el)=>(
        <div  className='card'>
            <div onClick={()=>{
              localStorage.setItem("singleProduct",JSON.stringify(el));
              navigate("/details");
            }}>
              <div>
                <img src={el.image} alt="demo products"/>
              </div>
              <div>
                <p><b>{el.title}</b></p>
                <p><b>Price: </b>Rs.{el.price}</p>
              </div>
            </div>
            <div>
              <button onClick={()=>{
              dispatch(removeCart(el.id))
            }}>X</button>
              </div>
            </div>
      ))}
      
      {cartItem.length===0 ? <div style={{textAlign:"center",}}>
        <h1>Empty Cart</h1>
        <p1>Please Add Some Items to Cart</p1>
      </div>:<div style={{textAlign:"end"}}>
      <h2>Total Amount : Rs.{sum}</h2>
      <div>
      <input onChange={(e)=>setDiscount(e.target.value)} className='coupon-input' type="text" placeholder='Use "Hydro30" & get 30% Off'/>
      </div>
      <button className='check-btn' onClick={()=>{
        dispatch(discountAmount(sum));
        navigate("/check-out")
      }}>Checkout</button>
      </div>}
    </div>
    </div>
  )
}
