import React from 'react'
import screen from "../assets/images/Screen5.jpg";
import screen1 from "../assets/images/Screen6.jpg";
const Crmplatform = () => {
    return (
      <>
        <div className="container">
          <h3 className="text-center py-5">
            <b>CRM Platform your business will love</b>
          </h3>
          <div className="row ">
            <div className="col-12 col-md-12 col-xxl-12  header-right-side d-flex  main-herosection-images">
              <img src={screen} alt="heroimg" className="img-fluid" />
              <img
                src={screen1}
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Crmplatform
