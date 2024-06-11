import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddProduct = () => {
    const [data,setData]=useState({
        "NAME":"",
        "code":"",
        "des":"",
        "PRICE":"",
        "cat":"",
        "md":"",
        "ed":"",
        "img":"",
        "pn":"",
        "dn":""
    })
    const inputhandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        axios.post("http://localhost:8084/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="ADD") {
                    alert("SUCCESS")
                } else {
                   alert("FAILED") 
                }
            }
        ).catch().finally()
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="fomr-label">PRODUCT NAME</label>
                            <input type="text" className="form-control"name='NAME' value={data.NAME} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PRODUCT CODE</label>
                            <input type="text" className="form-control" name='code' value={data.code} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PRODUCT DESCRIPTION</label>
                            <textarea className="form-control" name='des' value={data.des} onChange={inputhandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PRICE</label>
                            <input type="text" className="form-control" name='PRICE' value={data.PRICE} onChange={inputhandler}/>
                            </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CATEGORY</label>
                            <select name="cat" value={data.cat} onChange={inputhandler} id="" className="form-control" >
                                <option value="">STATIONARY</option>
                                <option value="">ELECTRONICS</option>
                                <option value="">KITCHEN NEEDS</option>
                                <option value="">FASHION</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">MANUFACTURE DATE</label>
                            <input type="text" className="form-control" name='md' value={data.md} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EXPIRY DATE</label>
                            <input type="text" className="form-control" name='ed' value={data.ed} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PRODUCT IMAGE</label>
                            <input type="file" name="img" value={data.img} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label" >DISTRIBUTOR NAME</label>
                            <input type="text" className="form-control" name='dn' value={data.dn} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct