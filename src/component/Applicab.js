import React, { Component } from 'react'
import Slider from "react-slick";
import Service from "../assets/images/Service-industry.png";
import Technology from "../assets/images/Technology-industry.png";
import Manufacturing from "../assets/images/Manufacturing--industry.png";
import Educational from "../assets/images/Educational-institutes.png";
import Hospitality from "../assets/images/Hospitality industry.png";
import Banking from "../assets/images/Banking-and-Financial-sector.png";
import Consumer from "../assets/images/Consumer-goods-companies.png";

function SampleNextArrow(props) {
  
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  background: "gray", borderRadius: "5rem", marginLeft: "1rem" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",  borderRadius: "5rem",  marginLeft: "1.5rem" }}
      onClick={onClick}
    />
  );
}
export default class Applicab extends Component {
    render() {
         var settings = {
           dots: true,
           infinite: true,
           speed: 500,
           slidesToShow: 3,
           slidesToScroll: 1,
           nextArrow: <SampleNextArrow />,
           prevArrow: <SamplePrevArrow />,
           initialSlide: 0,
           responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: true,
               },
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 initialSlide: 2,
               },
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
               },
             },
           ],
         };
        return (
          <div className="container  py-5">
            <h2 className="text-center"> Applicable industries </h2>
            <div className="row">
              <Slider {...settings}>
                
                      <div className="col-12">
                  <div className="applibe">
                    <img src={Service} className="img-fluid " alt="" />
                    <h6>Service industry</h6>
                  </div>
                </div>
                    
                <div className="col-12">
                  <div className="applibe">
                    <img src={Technology} className="img-fluid " alt="" />
                    <h6>Technology-industry</h6>
                  </div>
                </div>
                <div className="col-12">
                  <div className="applibe">
                    <img src={Manufacturing} className="img-fluid " alt="" />
                    <h6>Manufacturingindustry</h6>
                  </div>
                </div>
                <div className="col-12">
                  <div className="applibe">
                    <img src={Educational} className="img-fluid edu" alt="" />
                    <h6>Educational-institutes</h6>
                  </div>
                </div>
                <div className="col-12">
                  <div className="applibe">
                    <img src={Hospitality} className="img-fluid " alt="" />
                    <h6>Hospitality industry</h6>
                  </div>
                </div>
                <div className="col-12">
                  <div className="applibe">
                    <img src={Banking} className="img-fluid bank " alt="" />
                    <h6>Banking-and-Financial-sector </h6>
                  </div>
                </div>
                <div className="col-12">
                  <div className="applibe">
                    <img src={Consumer} className="img-fluid " alt="" />
                    <h6>Consumer goods companies</h6>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        );
    }
}
