import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const UserCreate = () => {
  const[id,setId]=useState("");
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[isActive,setIsActive]=useState(true);
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(id, name,email,phone,isActive);
    let payload={id, name,email,phone,isActive};
    // console.log(payload);
    fetch("http://localhost:8000/users",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(payload)
    })
    .then(res=>{
      toast.success("Successfully User Created")
      navigate("/")
    })
    .catch(err=>toast.error("failed due to:"+err.message))
  }
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
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
                       onChange={e=>setName(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input type="email" className='form-control' 
                       value={email}
                       onChange={e=>setEmail(e.target.value)}/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">Phone</label>
                      <input type="tel" className='form-control'
                       value={phone}
                       onChange={e=>setPhone(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="checkbox" className='form-checked' 
                       value={isActive}
                       onChange={e=>setIsActive(e.target.checked)}/>
                      <label htmlFor="">isActive</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button type="Submit" className='btn btn-success'>Save</button>
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

export default UserCreate