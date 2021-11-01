import React from 'react'
import "../Performance Evaluation System/Css/Performance.css"
import { Link } from "react-router-dom";
import logo from "../assets/images/neologicxlogo1.png";
import banner1 from "../assets/images/Banner Image1.png"
import About from './About';
import WhatitDO from './WhatitDO';
import Slider from './Sliders';
import Massage from './Massage';
import Footer from './Footer';
const Performance = () => {
    return (
        <>
            <div className="container-fluid performance-wrap ">
                <nav className="navbar  navbar-expand-lg sticky-top">
                    <div className="container">
                        <Link className="navbar-brand" to="#">
                            <img src={logo} className="img-fluid" alt="logo" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div
                            className="collapse navbar-collapse justify-conent-between"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container mt-5">
                <div className="row">
                    <div className="col-10 col-sm-6 col-md-6 col-xxl-6">
                            <h1 className="text-bold">
                                Performance Evaluation
                                System
                            </h1>
                            <p>
                                Can you let the people of your  organisation work in vain without  having the track of their performance ?
                            </p>
                            <button className="buttons">Get Details</button>
                    </div>
                    <div className="col-10 col-sm-6 col-md-6 col-xxl-6">
                            <img src={banner1} className="img-fluid" alt=""/>
                    </div>
                </div>
               
            </div>
            </div>
            <About/>
            <WhatitDO/>
            <Slider/>
            <Massage/>
            <Footer/>
        </>
    )
}

export default Performance
