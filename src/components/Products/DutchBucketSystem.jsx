import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { ducth } from '../../redux/actions/productAction';
import {useNavigate} from "react-router-dom"
import { cart } from '../../redux/actions/cartAction';
import {FaCartPlus} from "react-icons/fa";
export const DutchBucketSystem = () => {
    const dutchItems=useSelector((store)=>store.dutch.dutch)
    //console.log(dutchItems)
    const dispatch=useDispatch()
    const navigate=useNavigate();
    useEffect(()=>{
        dutchData();
    },[]);
    async function dutchData(){
        await axios.get("http://localhost:8000/dutch-bucket-system")
        .then((response)=>{
            //console.log(response.data)
            dispatch(ducth(response.data));
        })
    }
  return (
    <div>

    <h2>Dutch Bucket System</h2>
    <div className='demo'>
          {dutchItems && dutchItems.map((el)=>(
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
