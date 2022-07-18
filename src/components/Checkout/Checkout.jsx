import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { cart } from '../../redux/actions/cartAction';
import { Button } from '../Help/Button';
import "./Checkout.css";
export const Checkout = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const discountAmount=useSelector((store)=>store.discount.amount)
    function handleSubmit(e){
        e.preventDefault();
        alert("Payment Successful");
        dispatch(cart());
        navigate("/")
    }
  return (
    <div>
    <Button/>
    <div className='checkout-page'>
    <p><b>Total Amount :</b> Rs.{discountAmount}</p>
        <form onSubmit={handleSubmit} className='form'>
        <b>User Details</b>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Phone Number'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Address'/>
            <input type="text" placeholder='Pincode'/>
            <button className='form-btn'>Pay Now</button>
        </form>
    </div>
    </div>
  )
}
