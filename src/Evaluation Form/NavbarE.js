import React from "react";
import "../Evaluation Form/Css/Evaluation.css"
import logo from "../assets/images/neologicxlogo1.png";
import Header from "./Header";
import Card from "./Card";
import Whocan from "./Whocan";
import Footer from "./Footer";
const NavbarE = () => {
  return (
    <>
      <div className="container-fluid navbars">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
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
              <span></span>
              <span></span>
              <span></span>
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Header />
      <Card />
      <Whocan />
      <Footer />
    </>
  );
};

export default NavbarE;
