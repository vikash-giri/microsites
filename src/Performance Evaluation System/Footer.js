import React from 'react'
import facebook from "../assets/images/Facebook.png"
import insta from "../assets/images/Instagram.png";
import linked from "../assets/images/LinkedIn.png";
import footerlogo from "../assets/images/neologicx logo footer.png";

const Footer = () => {
    return (
        <>
          <footer>
          <div className="container text-center pt-5">
            <img src={facebook} className="img-fluid" alt="facebook" />
            <img src={insta} className="img-fluid" alt="facebook" />
            <img src={linked} className="img-fluid" alt="facebook" />
            <h6>
              Designed & Developed by:-{" "}
              <span>
                <img
                  src={footerlogo}
                  className="img-fluid bmlogo"
                  alt="footerlogo"
                />
              </span>
            </h6>
          </div>
              
          </footer>  
        </>
    )
}

export default Footer
