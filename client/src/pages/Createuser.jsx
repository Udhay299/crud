import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Createuser = () => {
  const [name,setname]= useState()
  const [email,setemail] = useState()
  const [age,setage] = useState()
  const navigator = useNavigate()
  const handlesubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/create',{name,email,age})
    .then(user=>{
      console.log(user)
      navigator('/')
    })
    .catch((err)=>console.log(err))
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" placeholder="Enter Name"  onChange={e=>setname(e.target.value)}/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" placeholder="Enter Email"  onChange={e=>setemail(e.target.value)}/>
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input type="text" placeholder="Enter Age"  onChange={e=>setage(e.target.value)}/>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Createuser;
