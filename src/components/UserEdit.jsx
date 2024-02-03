import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const UserEdit = () => {
  const{userid}=useParams();
  const[id,setId]=useState("");
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[isActive,setIsActive]=useState(true);
  const navigate=useNavigate();

  //fetching
  useEffect(()=>{
    fetch("http://localhost:8000/users/"+userid)
    .then(res=>{
      return res.json()
    }).then(resp=>{
      // console.log(resp);
      setId(resp.id);
      setName(resp.name);
      setEmail(resp.email);
      setPhone(resp.phone);
      setIsActive(resp.isActive);
    })
    .catch(err=>console.log(err.message))
  },[]);

  //editing
  const handleSubmit=(e)=>{
    e.preventDefault();
    let payload={name,email,phone,isActive};
    fetch("http://localhost:8000/users/"+userid,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(payload)
    }).then(res=>{
      toast.success("User edit successfully")
      navigate("/")
    })
    .catch(err=>console.log(err.message))
  }
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form action="" className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title" style={{textAlign:"center"}}>
                <h2>User Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">ID</label>
                      <input type="text" disabled className='form-control' 
                        value={id}
                        onChange={e=>setId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">Name</label>
                      <input type="text" className='form-control'
                       value={name}
                       onChange={e=>setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input type="email" className='form-control'
                       value={email}
                       onChange={e=>setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">Phone</label>
                      <input type="tel" className='form-control'
                       value={phone}
                       onChange={e=>setPhone(e.target.value)}
                      />  
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="checkbox" className='form-checked'
                      value={isActive}
                      onChange={e=>setIsActive(e.target.value)}
                      />
                      <label htmlFor="">IsActive</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
              <div className="form-group">
              <button type='submit' className='btn btn-success'>Save</button>
              <Link to="/" className='btn btn-danger'>Back</Link>
              </div>
            </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default UserEdit