import React from "react";
import "./Game.css";
import logo from "../assets/images/neologicxlogo1.png";
import banner from "../assets/images/BannersImage.png";
import Header from "./Header";
import FunLearn from "./FunLearn";
const Nav = () => {
  return (
    <>
      <div className="container-fluid game-wraper">
        <nav class="navbar navbar-expand-lg ">
          <div className="container">
            <a class="navbar-brand" href="#">
              <img src={logo} className="img-fluid" alt="logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fas fa-search"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <h1>Game Management System</h1>
          <p>
            Complete solution for full Management of the hosted game event
            <br />
            participants and the entire backend processes to faciliate
            effortless gaming
            <br /> experience
          </p>
          <button type="button" className="signup">
            Sign Up
          </button>
          <br/>
          <div className="bannersimages">
            <img src={banner} className="img-fluid" alt="banner" />
          </div>
        </div>
      </div>
      <Header/>
      <FunLearn/>
      
    </>
  );
};

export default Nav;
