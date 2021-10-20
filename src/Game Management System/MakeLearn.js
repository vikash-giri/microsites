import React from 'react'
import  LoginScreen from "../assets/images/Login Screen.png"
import signupscreen from "../assets/images/SignUpScreen.png";
import homescreen from "../assets/images/Home Screen.png";
const MakeLearn = () => {
    return (
      <>
        <div className="container screen">
          <h1 className="text-center py-5">Make Learning Addictive</h1>
          <div className="row">
            <div className="col-12 col-md-4 col-xxl-4">
              <img src={LoginScreen} className="img-fluid" alt="login screen" />
            </div>
            <div className="col-12 col-md-4 col-xxl-4">
              <img
                src={signupscreen}
                className="img-fluid"
                alt="login screen"
              />
            </div>
            <div className="col-12 col-md-4 col-xxl-4">
              <img src={homescreen} className="img-fluid" alt="login screen" />
            </div>
          </div>
        </div>
      </>
    );
}

export default MakeLearn
