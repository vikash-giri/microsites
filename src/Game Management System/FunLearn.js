import React from 'react'
import game  from "../assets/images/game.png"
import game1 from "../assets/images/123.png";
import game2 from "../assets/images/game2.png";
import game3 from "../assets/images/game3.png";
import MakeLearn from './MakeLearn';
import Footer from './Footer';

const FunLearn = () => {
    return (
      <>
        <div className="container-fluid fun-wraper">
          <div className="container">
            <div className="row  justify-content-center d-flex align-items-center">
              <h2>fun learning is the new smart</h2>
              <div className="col-12 col-md-6 col-xxl-6">
                <img src={game} className="img-fluid" alt="game" />
              </div>
              <div className="col-12 col-md-6 col-xxl-6">
                <div className="para">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer standard dummy text ever since the 1500s, when an
                    unknown printer
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-12 col-md-6 col-xxl-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer standard
                </p>
              </div>
              <div className="col-12 col-md-6 col-xxl-6">
                <img src={game1} className="img-fluid" alt="game" />
              </div>
            </div>
            <div className="row  justify-content-center d-flex align-items-center">
              <div className="col-12 col-md-6 col-xxl-6">
                <img src={game2} className="img-fluid" alt="game" />
              </div>
              <div className="col-12 col-md-6 col-xxl-6">
                <div className="para">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer standard dummy text ever
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-12 col-md-6 col-xxl-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when 
                
                </p>
              </div>
              <div className="col-12 col-md-6 col-xxl-6">
                <img src={game3} className="img-fluid" alt="game" />
              </div>
            </div>
          </div>
        </div>
        <MakeLearn/>
        <Footer/>
      </>
    );
}

export default FunLearn
