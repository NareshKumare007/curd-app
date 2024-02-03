import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const UserHome = () => {
  const[userData,setUserData]=useState([]);
  // console.log(userData);
  const navigate=useNavigate();
  useEffect(()=>{
    fetch("http://localhost:8000/users")
    .then(res=>{
      return res.json();
    }).then(resp=>{
      // console.log(resp);
      setUserData(resp);
    })
    .catch(err=>console.log(err.message))
  },[])

  //!single user details
  const LoadDetails=(id)=>{
    navigate("/details/"+id)
  }

  //!deleting user details
  const RemoveUser=(id)=>{
    fetch("http://localhost:8000/users/"+id,{
            method:"DELETE",
        })
        .then(res=>{
            toast.warning("User removed successfully");
            window.location.reload();
        })
        .catch(err=>console.log(err.message));
  }
  //Editing user details
  let LoadEdit=(id)=>{
    navigate("/edit/"+id)
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-title text-secondary " style={{textAlign:"center"}}>
          <h2>User List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/create" className='btn btn-success mb-4'>Add User(+)</Link>
          </div>
          <table className='table table-brodered'>
            <thead className='bg-dark text-white '>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {
                userData.map((user,i)=>{
                  return (
                    <tr key={user.id} className='table-info'>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <a href="#" onClick={()=>LoadEdit(user.id)} className='btn btn-primary mr-3' >Edit</a>
                        <a href="#" onClick={()=>RemoveUser(user.id)} className='btn btn-danger mr-3'>Remove</a>
                        <a href="#" onClick={()=>LoadDetails(user.id)} className='btn btn-success'>Details</a>
                      </td>
                    </tr>
                  )
                })

              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserHome