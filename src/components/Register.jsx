import React, { useState } from 'react'
import Headers from './Headers'

const Register = () => {
    const [newRegister,setNewregister]=useState(
        {
            farmerid:"",
            BldGrp:"",
            pinCode:"",
            dob:"", 
            email:"", 
            phNum:"", 
            address:"", 
            farmerName:""
        }
        )
    const readRegister = (read) =>{
       setNewregister({...newRegister,[read.target.name]:read.target.value})
    }   
    
    const displayRegister =()=>{
        console.log(newRegister)
    }
    
  return (
    <div>

        <Headers/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Farmer Id</label>
                            <input type="text" name="farmerid" value={newRegister.farmerid} className="form-control" onChange={readRegister}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form label">Farmer Name</label>
                            <input type="text" name="farmerName" value={newRegister.farmerName} className="form-control" onChange={readRegister} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Address</label>
                            <textarea id="" cols="30" rows="5" className="form-control" name="address" value={newRegister.address} onChange={readRegister}></textarea>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form label">Phone Number</label>
                            <input type="text" name="phNum" value={newRegister.phNum} className="form-control" onChange={readRegister}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" name="email" value={newRegister.email}id="" className="form-control" onChange={readRegister} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Date Of Birth</label>
                        <input type="date" name="dob" value={newRegister.dob} id="" className="form-control" onChange={readRegister} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Pin code</label>
                        <input type="text" name="pinCode" value={newRegister.pinCode} className="form-control" onChange={readRegister} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Blood Group </label>
                        <input type="text" name="BldGrp" value={newRegister.BldGrp} className="form-control" onChange={readRegister} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button onClick={displayRegister} className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Register