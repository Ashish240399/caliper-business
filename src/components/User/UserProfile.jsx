import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/userLoginAction';

export const UserProfile = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const user=JSON.parse(localStorage.getItem("user-in-app"))
  return (
    <div>
        {user && <div>
            <p><b>Name : </b>{user.first_name} {user.last_name}</p>
            <p><b>Email Id : </b>{user.email}</p>
            <p><b>Phone Number : </b>{user.phone}</p>
            <button onClick={()=>{
                localStorage.removeItem("user-in-app")
                dispatch(logout());
                alert("Do you want to logout ?")
                navigate("/");
            }}>Logout</button>
        </div>}
    </div>
  )
}
