import React from "react";
import box1 from "../assets/images/Box1.png";
import box2 from "../assets/images/Box2.png";
import box3 from "../assets/images/Box3.png";
import box4 from "../assets/images/Box4.png";
import box5 from "../assets/images/Box5.png";
const Header = () => {
  return (
    <>
      <div className="container-fluid headers-wraper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-xxl-12">
              <div className="img-wraper">
                <img src={box1} className="img-fluid" alt="box1" />
                <div class="top-left">
                  Want to add motivation to your <br /> gaming portal?
                </div>
              </div>
              <div className="img-wraper1 float-right">
                <img src={box2} className="img-fluid " alt="box1" />
                <div class="top-right">
                  improve gaming experience for users?
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12 col-xxl-12">
              <div className="img-wraper">
                <img src={box3} className="img-fluid " alt="box1" />
                <div class="top-left">
                  Induce the users on various levels <br /> and allocaton of
                  points?
                </div>
              </div>
              <div className="img-wraper1 float-right">
                <img src={box4} className="img-fluid " alt="box1" />
                <div class="top-rights">
                  Ever automated recurring interactive <br /> quizzes and
                  tournaments with deep <br /> diving details?
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-xxl-12">
              <div className="img-wraper">
                <img src={box5} className="img-fluid" alt="box1" />
                <div class="top-left3">
                  Want to make learning addictive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
