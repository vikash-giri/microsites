import React from 'react'
import facebook from "../assets/images/Facebook1.png";
import insta from "../assets/images/Instagram1.png";
import linked from "../assets/images/LinkedIn1.png";
import footerlogo from "../assets/images/neo logo.png";
const Footer = () => {
    return (
      <>
        <div className="container-fluid efooter">
          <div className="container">
            <div className="row forms ">
              <div className="col-12 col-md-6 col-xxl-6">
                <h4>Get in Touch</h4>
                <div className="contacts">
                  <label>
                    <b>Contact Us</b>
                  </label>
                  <p className="numbers">+919887474970</p>
                  <br />
                  <label>
                    <b>Email Us</b>
                  </label>
                  <p className="numbers">info@loremipsume.com</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xxl-6">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form"
                      id="exampleInputNumber1"
                      aria-describedby="emailHelp"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Massage"
                    ></textarea>
                  </div>
                  <button type="button" className="btn efsubmit  btn-block">
                    <b>Sumbit</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomfooter py-5">
          <img src={facebook} className="img-fluid" alt="facebook" />
          <img src={insta} className="img-fluid" alt="facebook" />
          <img src={linked} className="img-fluid" alt="facebook" />
          <h4>
            {" "}
            Designed & Developed by:-
            <span>
              <img src={footerlogo} className="img-fluid" alt="footerlogo" />
            </span>
          </h4>
        </div>
      </>
    );
}

export default Footer
