import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { micro } from '../../redux/actions/productAction';
import {useNavigate} from "react-router-dom"
import { cart } from '../../redux/actions/cartAction';
import {FaCartPlus} from "react-icons/fa";
export const MicroGreenkitsSystem = () => {
    const microItems=useSelector((store)=>store.micro.micro)
    //console.log(microItems)
    const dispatch=useDispatch()
    const navigate=useNavigate();
    useEffect(()=>{
        microData();
    },[]);
    async function microData(){
        await axios.get("http://localhost:8000/microgreen-kits")
        .then((response)=>{
            //console.log(response.data)
            dispatch(micro(response.data));
        })
    }
  return (
  <div>

  <h2>Micro Green Kits Systems</h2>
    <div className='demo'>
          {microItems && microItems.map((el)=>(
            <div className='demo-card'>
            <div  onClick={()=>{
              localStorage.setItem("singleProduct",JSON.stringify(el));
              navigate("/details");
            }}>
              <div className='image-div'>
                <img src={el.image} alt="demo products"/>
              </div>
              <div>
              <p><b>{el.title}</b></p>
                <p><b>Price : </b>Rs.{el.price}</p>
              </div>
            </div>
            <button className='cart-btn' onClick={()=>{
                dispatch(cart(el))
              }}>Add to cart<FaCartPlus/></button>
            </div>
          ))}
          </div>
          </div>
  )
}
