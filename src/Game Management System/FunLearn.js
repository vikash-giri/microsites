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
                    Gamification in learning process increase the engagement and
                    concentration level . A user is thoroughly engaged and
                    doesn’t feel the usual monotony that can come with new
                    learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-12 col-md-6 col-xxl-6">
                <p>
                  Incentivise gamers with Experience points and badges , later
                  converted to avail monetary benefits like coupons, discounts,
                  plan, experience etc.
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
                    Lead Scoring and Evaluation provide better insights of
                    Points, Badges, and Leaderboards. This will greatly induce
                    them to rise on points ladder and keep them glued to game
                    learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-12 col-md-6 col-xxl-6">
                <p>
                  Online socialization opportunities via team quizzes and
                  interaction improves feeling of social connectedness and peer
                  bonding.
                </p>
              </div>
              <div className="col-12 col-md-6 col-xxl-6">
                <img src={game3} className="img-fluid" alt="game" />
              </div>
            </div>
          </div>
        </div>
        <MakeLearn />
        <Footer />
      </>
    );
}

export default FunLearn
