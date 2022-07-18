import axios from 'axios'
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { nft } from '../../redux/actions/productAction';
import { useNavigate } from 'react-router-dom';
import { cart } from '../../redux/actions/cartAction';
import "./ProductsPage.css"
import {FaCartPlus} from "react-icons/fa";
export const NftSystem = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const nftData=useSelector((store)=>store.nft.nft)
    //console.log(nftData)
    useEffect(()=>{
        nftdata();
    },[]);
    async function nftdata(){
        await axios.get("http://localhost:8000/NFT_Systems")
        .then((response)=>{
            dispatch(nft(response.data[0]))
        })
    }
  return (
    // <div className='NFT'>
    //     {nftData.linear_grow_system && nftData.linear_grow_system.map((el)=>(
    //       <div className='card'>
    //         <div >
    //         <div onClick={()=>{
    //           localStorage.setItem("singleProduct",JSON.stringify(el));
    //           navigate("/details");
    //         }}>
    //           <div className='image-div'>
    //             <img src={el.image} alt="demo products"/>
    //           </div>
    //           <div>
    //             <p>{el.title}</p>
    //             <p>P{el.price}</p>
    //           </div>
              
    //         </div>
    //         <button onClick={()=>{
    //             //console.log(el)
    //             dispatch(cart(el))
    //           }}>Add to cart</button>
    //         </div>
    //         </div>
    //       ))}
    //       {nftData.vertical_grow_system && nftData.vertical_grow_system.map((el)=>(
    //         <div  className='card'>
    //         <div>
    //         <div onClick={()=>{
    //           localStorage.setItem("singleProduct",JSON.stringify(el));
    //           navigate("/details");
    //         }}>
    //           <div>
    //             <img src={el.image} alt="demo products"/>
    //           </div>
    //           <div>
    //             <p>{el.title}</p>
    //             <p>P{el.price}</p>
    //           </div>
    //         </div>
    //         <button onClick={()=>{
    //             dispatch(cart(el))
    //           }}>Add to cart</button>
    //           </div>
    //         </div>
    //       ))}
    //       {nftData.indoor_grow_system && nftData.indoor_grow_system.map((el)=>(
    //         <div  className='card'>
    //         <div>
    //         <div  onClick={()=>{
    //           localStorage.setItem("singleProduct",JSON.stringify(el));
    //           navigate("/details");
    //         }}>
    //           <div>
    //             <img src={el.image} alt="demo products"/>
    //           </div>
    //           <div>
    //             <p>{el.title}</p>
    //             <p>P{el.price}</p>
    //           </div>
    //         </div>
    //         <button onClick={()=>{
    //             dispatch(cart(el))
    //           }}>Add to cart</button>
    //           </div>
    //         </div>
    //       ))}
    // </div>
    <div>
    <h2>Linear Grow System</h2>
    <div className='demo'>
          {nftData.linear_grow_system && nftData.linear_grow_system.map((el)=>(
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
              }}>Add to cart <FaCartPlus/></button>
            </div>
          ))}
          </div>
          <h2>Vertical Grow System</h2>
          <div className='demo'>
          {nftData.vertical_grow_system && nftData.vertical_grow_system.map((el)=>(
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
              }}>Add to cart <FaCartPlus/></button>
            </div>
          ))}
          </div>
          <h2>Indoor Grow System</h2>
          <div className='demo'>
          {nftData.indoor_grow_system && nftData.indoor_grow_system.map((el)=>(
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
              }}>Add to cart <FaCartPlus/></button>
            </div>
          ))}
        </div>
        </div>
  )
}
