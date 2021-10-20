import React from 'react'
import img from "../assets/images/img1.png"
const Header = () => {
    return (
      <>
        <div className="container-fluid headerpart">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-xxl-12">
                <div className="firstbox">
                  <img src={img} className="img-fluid" alt="images" />
                </div>
                <div className="secoundbox">
                  <h3>Evaluation Form</h3>
                  <p>
                    Automated online tool designed to process personal
                    information of huge pool of candidates for a particular
                    recruitment drive or competitive exam and increase the
                    chance of getting information in proper format so that not
                    even a single aspect is missed out.{" "}
                  </p>
                  <button type="button" className="btns">get details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header
