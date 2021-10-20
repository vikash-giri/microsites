import React from "react";
import Complaintimg1 from "../assets/images/Banner_image.jpg"
const Feature = () => {
  
  return (
    <>
      <div className="container-fluid feature">
        <div className="container">
          <div className="row">
            <h1 className="text-center pb-2">Feature</h1>
            <div className="col-12 col-sm-6 col-md-4 col-xxl-4">
              <div class="card text-dark bg-light mb-3 ">
                <div class="card-header">
                  <h5>Dedicated Portal</h5>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    For our amazing customers to register product/service
                    related problem statement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xxl-4">
              <div class="card text-dark bg-light mb-3">
                <div class="card-header">
                  <h5>Team Productivity</h5>
                </div>
                <div class="card-body teams">
                  <p class="card-text  ">
                    Each issue gets resolved by respective department and
                    reverted to customer customer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xxl-4">
              <div class="card text-dark bg-light mb-3">
                <div class="card-header">
                  <h5>Avert customer churn</h5>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Handle all the complaints with utmost care and give
                    appropriate attention to prevent bounce rate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xxl-4">
              <div class="card text-dark bg-light mb-3">
                <div class="card-header">
                  <h5>Prevent Wildfire</h5>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Solve queries timely to delight customers as one unsolved
                    problem spreads negative word-of-mouth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xxl-4">
              <div class="card text-dark bg-light mb-3 ">
                <div class="card-header">
                  <h5>Customer Feedback</h5>
                </div>
                <div class="card-body teams">
                  <p class="card-text ">
                    Vital for improving quality and make them feel that their
                    feedback is important.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xxl-4">
              <div class="card text-dark bg-light mb-3">
                <div class="card-header">
                  <h5>Accurate Analysis</h5>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Reports are escalated to higher management for extensive
                    analysis and discover improvement areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
