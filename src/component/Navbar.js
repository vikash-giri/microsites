import React from "react";
import "../App.css";
import logo from "../assets/images/neologicxlogo1.png";
const Navbar = () => {
  return (
    <div className="container-fluid navbar-wraper">
      <nav class="navbar  navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand" to="#">
            <img src={logo} className="img-fluid" alt="logo" />
          </a>
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
                <a className="nav-link" to="/Home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1>Complaint Management <br/> system</h1>
      <p>
       Software program to address customers'inquiries<br/>
       Manage  Complaint and deliver consistent support <br/>
        in prompt and professional manner timely

      </p>
      <button className="getdetails">Get Details</button>
    </div>
  );
};

export default Navbar;
