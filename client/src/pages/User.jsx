import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from  'react-router-dom'

const User = () => {
  const [user, setuser] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/')
    .then((user)=>setuser(user.data))
    .catch((err)=>console.log(err))
  })

  const handledelete = (id)=>{
    axios.delete('http://localhost:3000/delete/'+id)
    .then((user)=>{console.log(user)
      window.location.reload()
    }
  )
    .catch((err)=>console.log(err))
    
  }
  return (
    <>
    <Link to='/create'>Add</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user._id}`}>Edit</Link>
                  <button onClick={e=>handledelete(user._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default User;
