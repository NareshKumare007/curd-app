import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserDetails = () => {
  const {userid}=useParams();
  const [user,setUser]=useState({});
  useEffect(()=>{
    fetch("http://localhost:8000/users/"+userid)
    .then(res=>{
      return res.json()
    }).then(resp=>{
      // console.log(resp);
      setUser(resp)
    })
    .catch(err=>console.log(err.message))
  },[])
  return (
    <section>
      <article>
        <h2>User Name:{user.name}</h2>
        <h2>User Email:{user.email}</h2>
        <h2>User Phone:{user.phone}</h2>
        <Link to="/" className='btn btn-danger'>Back to Home</Link>
      </article>
    </section>
  )
}

export default UserDetails