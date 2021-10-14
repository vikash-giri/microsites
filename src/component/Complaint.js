import React from 'react'
import Complaintimg from "../assets/images/Screen1.jpg"
import Complaintimg1 from "../assets/images/Screen2.jpg"
const Complaint = () => {
    return (
        <div className="container">
         <div className="row complaint-wraper">
         <h1 className="text-center py-5">Torn Complaints Into Complaints</h1>
             <div className="col-12 col-md-6 col-xxl-5">
                 <img src={Complaintimg} className="img-fluid" alt="complaint-img"/>
             </div>
             <div className="col-12 col-md-6 col-xxl-5">
             <img src={Complaintimg1} className="img-fluid" alt="complaint-img"/>
             </div>
         </div>
           
        </div>
    )
}

export default Complaint
