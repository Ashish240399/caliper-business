import React, { useEffect, useState } from 'react'
import "./ProductsPage.css";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DutchBucketSystem } from './DutchBucketSystem'
import { DwcSystem } from './DwcSystem'
import { MicroGreenkitsSystem } from './MicroGreenkitsSystem'
import { NftSystem } from './NftSystem'
import { Button } from '../Help/Button';
export const ProductsPage = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.userDetails.user);
  console.log(user)
  const [help_btn,setHelp_btn]=useState("show")
  
  // useEffect(()=>{
  //   //console.log("yes")
  //   if(user!=={}){
  //     setHelp_btn("dont_show")
  //   }
    
  // },[user])
  console.log(help_btn)
  console.log()
  return (
    <div >
    <Button/>
        <div className='All-products'>
        
          <NftSystem/>
          <DutchBucketSystem/>
          <DwcSystem/>
          <MicroGreenkitsSystem/>
          
        </div>
    </div>
  )
}
