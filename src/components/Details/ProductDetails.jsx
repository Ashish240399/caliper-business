import React from 'react'
import "./ProductDetails.css";
import { useDispatch } from 'react-redux';
import { cart } from '../../redux/actions/cartAction';
import { Button } from '../Help/Button';
import {FaCartPlus} from "react-icons/fa";
export const ProductDetails = () => {
  const product=JSON.parse(localStorage.getItem("singleProduct"));
  const dispatch=useDispatch()
  console.log(product);
  return (
    <div className='details'>
      <Button/>
        {product && <div className='pro-detail'>
          <div>
            <img src={product.image} alt=""/>
          </div>
          <div>
            <h2>{product.title}</h2>
            <p><b>Price : </b>Rs.{product.price}</p>
            <p><b>Size : </b>{product.size}</p>
            <button className='cart-btn' onClick={()=>{
            dispatch(cart(product))
          }}>Add to cart <FaCartPlus/></button>
          </div>
          
        </div>}
    </div>
  )
}
