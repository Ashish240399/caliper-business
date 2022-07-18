import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { dwc } from '../../redux/actions/productAction';
import {useNavigate} from "react-router-dom"
import { cart } from '../../redux/actions/cartAction';
import {FaCartPlus} from "react-icons/fa";
export const DwcSystem = () => {
    const dwcItems=useSelector((store)=>store.dwc.dwc)
    //console.log(dwcItems)
    const dispatch=useDispatch()
    const navigate=useNavigate();
    useEffect(()=>{
        dwcData();
    },[]);
    async function dwcData(){
        await axios.get("http://localhost:8000/dwc-system")
        .then((response)=>{
            //console.log(response.data)
            dispatch(dwc(response.data));
        })
    }
  return (
    <div>

    <h2>DWC Systems</h2>
    <div className='demo'>
          {dwcItems && dwcItems.map((el)=>(
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
