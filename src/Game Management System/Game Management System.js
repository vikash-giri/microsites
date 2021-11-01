import React from "react";
import "./Game.css";
import logo from "../assets/images/neologicxlogo1.png";
import banner from "../assets/images/BannersImage.png";
import Header from "./Header";
import FunLearn from "./FunLearn";
import { Link } from "react-router-dom";
const GameManagementSystem = () => {
  return (
    <>
      <div className="container-fluid game-wraper">
        <nav className="navbar navbar-expand-lg ">
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

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/Performance">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="input-group mb-3 searchbar">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
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
          <br />
          <div className="bannersimages">
            <img src={banner} className="img-fluid" alt="banner" />
          </div>
        </div>
      </div>
      <Header />
      <FunLearn />
    </>
  );
};

export default GameManagementSystem;
