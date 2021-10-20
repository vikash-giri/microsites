import React from 'react'
import facebook from "../assets/images/Facebook.png";
import insta from "../assets/images/Instagram.png";
import linked from "../assets/images/LinkedIn.png";
import footerlogo from "../assets/images/neologicx logo footer.png";
const Footer = () => {
    return (
      <>
        <div className="container-fluid gamefooter">
          <div className="container">
            <div className="row py-5">
              <h2 className="text-center pb-3">Get in Touch</h2>
              <div className="col-12 col-md-6 col-xxl-6">
                <div className="forms-contacts">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="names"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="names"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="phone"
                        className="names"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="names"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Massage"
                        required
                      ></textarea>
                    </div>
                    <button type="button" className="submit ">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xxl-6">
                <div className="contact">
                  <label>Contact Us</label>
                  <p className="number">+919887474970</p>
                  <br />
                  <label>Email Us</label>
                  <p className="number">info@loremipsume.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
         <div className="container-fluid gamebottomfooter">
          <div className="container text-center pt-5">
            <img src={facebook} className="img-fluid" alt="facebook" />
            <img src={insta} className="img-fluid" alt="facebook" />
            <img src={linked} className="img-fluid" alt="facebook" />
            <h5>
              Designed & Developed by:-{" "}
              <span>
                <img src={footerlogo} className="img-fluid" alt="footerlogo" />
              </span>
            </h5>
          </div>
        </div>
      </>
    );
}

export default Footer
