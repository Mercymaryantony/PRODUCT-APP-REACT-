import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const ViewAll = () => {
        const [data,changedata]=useState(
            []
        )


        const fetchdata = ()=>{
            axios.get("http://localhost:8084/view").then(
                (response)=>{
                    changedata(response.data)
                }
            ).catch(
                (error)=>{
                    console.log(error.message)
                    alert(error.message)
                }
            )
        }
        useEffect(()=>{fetchdata()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                          {data.map(
                            (value,i) =>
                                {
                                    return   <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div className="card" >
                                        <img src="https://i2.wp.com/letterprint.co.in/wp-content/uploads/2018/07/stationary-products-1.jpg?fit=1000%2C700" className="card-img-top" alt="..." height="250px"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.NAME}</h5>
                                                <p className="card-text">{value.PRICE}</p>
                                                <a href="#" class="btn btn-primary">BUY</a>
                                            </div>
                                    </div>
                                </div>
                                }
                          )

                          }
                            
                            
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll