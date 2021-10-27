import React from 'react'
import Footer from "./Footer"

const Contact = () => {
    return (
        <>
      <div className="contact-wraper">
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
      <Footer/>
            </>
    );
}

export default Contact
