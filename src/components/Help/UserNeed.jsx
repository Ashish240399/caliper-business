import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userDetails } from '../../redux/actions/userDetailsAction';
import "./userForm.css"
export const UserNeed = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [form,setForm]=useState({
        name:"",
        email:"",
        phone:"",
        requirement:"",
        budget:"",
        state:"",
        district:"",
        address:"",
    });

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(form.name==="" || form.address==="" || form.budget==="" || form.phone==="" || form.requirement==="" || form.state===""){
            alert ("Fill all the data")
        }
        else{
            dispatch(userDetails(form));
            navigate("/");
        }
        
    }
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
        <p><b>User Details</b></p>
            <input onChange={handleChange} name='name' placeholder='Name' type="text" / >
            <input onChange={handleChange} name='email' placeholder='Email' type="text" / >
            <input onChange={handleChange} name='phone' placeholder='Phone Number' type="text" / >
            <input onChange={handleChange} name='budget' placeholder='Budget' type="text" / >
            <input onChange={handleChange} name='state' placeholder='State' type="text"/>
            <input onChange={handleChange} name='district' placeholder='District' type="text"/>
            <input onChange={handleChange} name='address' placeholder='Address' type="text"/>
            <textarea onChange={handleChange} name='requirement' placeholder='Requirement' />
            <button className='form-btn' type="submit">Submit</button>
        </form>
    </div>
  )
}
