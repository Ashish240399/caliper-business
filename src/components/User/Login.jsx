import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userName } from '../../redux/actions/userLoginAction';

export const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const [form,setForm]=useState({
        email:"",
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
        const data=await fetch("http://localhost:8000/users");
        const res=await data.json();
        var count=0;
        let user;
        for(var i=0;i<res.length;i++){
            if(res[i].email===form.email && res[i].password===form.password){
                count++;
                user=res[i]
                break;
            }
        }
        if(count>0){
            localStorage.setItem("user-in-app",JSON.stringify(user));
            dispatch(userName(user.first_name))
            alert("Login Successful")
            navigate(-2);
        }
        else{
            alert("Invalid user details")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
        <h2>Login</h2>
            <input name="email" onChange={handleChange} type="text" placeholder='Enter Email'/>
            <input name="password" onChange={handleChange} type="text" placeholder='Enter Password'/>
            <button className='form-btn' type='submit'>Submit</button>
            <div style={{color:"red"}}>Don't have an account?<Link style={{color:"blue",marginLeft:"10px",textDecoration:"underline"}} to="/register">Register</Link></div>
        </form>
    </div>
  )
}
