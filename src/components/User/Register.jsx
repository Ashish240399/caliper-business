import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const Register = () => {
    const navigate=useNavigate()
    const [form,setForm]=useState({
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        password:""
    });

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const userDetails=await fetch("http://localhost:8000/users");
        const res=await userDetails.json();
        var count=0;
        for(var i=0;i<res.length;i++){
            if(form.email===res[i].email){
                count++;
                break;
            }
        }
        if(count!==0){
            alert("Existing User")
        }
        else{
            axios.post("http://localhost:8000/users",form)
            localStorage.setItem("user-in-app",JSON.stringify(form));
            alert("You have successfully Registered")
            navigate("/login")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
        <h2>Register</h2>
            <input onChange={handleChange} name='first_name' type="text" placeholder='Enter Name'/>
            <input onChange={handleChange} name='last_name' type="text" placeholder='Enter Name'/>
            <input onChange={handleChange} name='email' type="text" placeholder='Enter Email'/>
            <input onChange={handleChange} name='phone' type="text" placeholder='Enter Phone Number'/>
            <input onChange={handleChange} name='password' type="text" placeholder='Enter Password'/>
            <button className='form-btn' type='submit'>Submit</button>
            <div style={{color:"red"}}>Have an account?<Link style={{color:"blue",marginLeft:"10px",textDecoration:"underline"}} to="/login">Login</Link></div>
        </form>
    </div>
  )
}
