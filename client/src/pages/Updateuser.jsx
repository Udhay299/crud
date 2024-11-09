import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'


const Updateuser = () => {
  const {id} = useParams()
  const [name,setname]= useState()
  const [email,setemail] = useState()
  const [age,setage] = useState()
  const navigator = useNavigate()
 

  useEffect(()=>{
    axios.get('http://localhost:3000/getuser/'+id)
    .then((user)=>
      {setname(user.data.name)
      setemail(user.data.email)
      setage(user.data.age)
    })
    .catch((err)=>console.log(err))
  },[])
  const handlesubmit = (e)=>{
    e.preventDefault()
    axios.put('http://localhost:3000/update/'+id,{name,email,age})
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
        <input type="text" placeholder="Enter Name" value={name} onChange={e=>setname(e.target.value)}/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" placeholder="Enter Email" value={email} onChange={e=>setemail(e.target.value)}/>
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input type="text" placeholder="Enter Age"  value={age}  onChange={e=>setage(e.target.value)}/>
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Updateuser