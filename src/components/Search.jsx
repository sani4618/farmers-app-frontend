import React, { useState } from 'react'
import Headers from './Headers'

const Search = () => {
    const [newSearch,setNewsearch]=useState(
        {
            farmerid:""
        }
        )
    const readsearch = (read) =>{
       setNewsearch({...newSearch,[read.target.name]:read.target.value})
    }   
    
    const displaySearch =()=>{
        console.log(newSearch)
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
                                <input type="text" name="farmerid" value={newSearch.farmerid}  className="form-control" onChange={readsearch} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                <button onClick={displaySearch} className="btn btn-primary">Search</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Search