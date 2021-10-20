import React from 'react'
import "../education CRM/CSS/CRM.css"
import bannerimage from "../assets/images/bannerimage.png"
import  ticks from "../assets/images/Ticks.png"
const Header = () => {
    return (
      <>
        <div className="container pt-5">
          <div className="row ">
            <div className="col-12 col-md-5 col-xxl-5">
              <h2>
                <b>See The Platform in Action</b>
              </h2>
              <p>
                Multifaceted CRM designed to streamline your lead nurturing
                efforts. Capture all leads automatically to ensure a smooth
                workflow for all future actions.
              </p>
              <button className="getdetail">Get Details</button>
            </div>
            <div className="col-12 col-md-7 col-xxl-7">
              <img src={bannerimage} className="img-fluid" alt="bannerimg" />
            </div>
          </div>
        </div>
        <div className="container-fluid eduCrm-sec ">
          <div className="container">
            <h2 >Why Choose Educational CRM?</h2>
            <p>
              <img src={ticks} className="img-fluid" alt="check" />
              <span className="ml-2">
                Preparing multiple excel sheets for communication, follow up and
                reminders?
              </span>
            </p>
            <p>
              <img src={ticks} className="img-fluid" alt="check" />
              <span className="ml-2">
                Struggling to synchronise the admission queries?
              </span>
            </p>
            <p>
              <img src={ticks} className="img-fluid" alt="check" />
              <span className="ml-2">
                Manual entries giving you incorrect conversion rates?
              </span>
            </p>
            <p>
              <img src={ticks} className="img-fluid" alt="check" />
              <span className="ml-2">
                Did you miss out on taking action on a lead, a valuable lead?
              </span>
            </p>
            <p>
              <img src={ticks} className="img-fluid" alt="check" />
              <span className="ml-2">
                Difficulty in maintaining data on multiple excel sheets manually
                ?
              </span>
            </p>
          </div>
        </div>
      </>
    );
}

export default Header
