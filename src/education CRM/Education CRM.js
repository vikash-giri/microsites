import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/neologicxlogo1.png";
import Crmplatform from './Crmplatform';
import EductionCRMs from './EductionCRMs';
import Footer from './Footer';
import Header from './Header';
const EducationCRM = () => {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <Link class="navbar-brand" to="/">
              <img src={logo} className="img-fluid" alt="logo" />
            </Link>
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
                  <Link class="nav-link" to="/Evaluation Form">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Header />
        <EductionCRMs />
        <Crmplatform />
        <Footer />
      </>
    );
}

export default EducationCRM
