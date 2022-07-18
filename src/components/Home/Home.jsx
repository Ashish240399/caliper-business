import axios from 'axios';
import React, { useEffect } from 'react'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hydroponicData } from '../../redux/actions/homeAction';
import { Button } from '../Help/Button';
const banner=require("../../image/Banner-4-1.jpg");

export const Home = () => {
  const dispatch=useDispatch();
  const homePageData=useSelector((store)=>store.hydroponic.hydro);
  const navigate=useNavigate();
  useEffect(()=>{
    getdata();
    getBanner();
  },[]);
  async function getdata(){
    axios.get("http://localhost:8000/hydroponic")
    .then((response)=>{
      dispatch(hydroponicData(response.data));
    })
  }
  async function getBanner(){
    axios.get("http://localhost:8000/sliding_images")
    .then((response)=>{
      dispatch(banner(response.data));
    })
  }
  return (
    <div>
    <Button/>
    <div className='Home'>
    
        <div className='banner'>
          
            <img src={banner} alt="Banners"/>
          
        </div>
        <h1>Check Some Demo Products</h1>
        <div className='demo'>
          {homePageData && homePageData.map((el)=>(
            <div className='demo-card' onClick={()=>{
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
          ))}
        </div>
    </div>
    </div>
  )
}
