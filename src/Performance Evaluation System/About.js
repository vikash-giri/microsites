import React from 'react'
import Login from "../assets/images/Login Screen1.jpg"
import Homescreen from "../assets/images/Homescreen.jpg"
const About = () => {
    return (
        <>
        <div className="abouts-wraper">
        <div className="container">
                <h3>About Us</h3>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a erat nulla. Sed accumsan imperdiet est eget dignissim. Curabitur eget dui ex. Mauris diam risus, suscipit eget eros non, scelerisque maximus augue. Donec consectetur  </p>
        </div>
            </div>
            <div className="container improver-wrap">
                <h2 >Designed To Improve Your Performance</h2>
                <div className="row">
                    <div className="col-12 col-md-6 col-xxl-6">
                        <img src={Login} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-12 col-md-6 col-xxl-6">
                        <img src={Homescreen} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
           </>
    )
}

export default About
