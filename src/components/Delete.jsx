import React, { useState } from 'react'
import Headers from './Headers'

const Delete = () => {
    const [newDelete,setNewDelete]=useState(
        {
            farmerid:""
        }
    )
    const readDelete =(event)=>{
        setNewDelete({...newDelete,[event.target.name]:event.target.value})
    }
    const displayDelete  =()=>{
        console.log(newDelete)
    }
  return (
    <div>
        <Headers/>

<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                <label htmlFor="" className="form_label">Farmer Id</label>
                                <input type="text" name="farmerid" value={newDelete.farmerid}  className="form-control" onChange={readDelete}/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                <button onClick={displayDelete} className="btn btn-danger">Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default Delete