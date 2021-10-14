import React, { Component } from "react";
import Slider from "react-slick";
import slide from "../assets/images/img.png"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="container-fluid headers">
        <div className="container">
          <h2>Thanking Our Customers For Bringing it Our Notice</h2>
          <Slider {...settings}>
            <div className="col-12 slidesimg">
              <img src={slide} className="img-fluid" alt="slider-img" />
              <h2 className="centered">67%</h2>
              <p className="pcentered">
                {" "}
                67% of customer churn is preventable if firms resolve issues the
                first time they occur
              </p>
            </div>
            <div className="col-12 slidesimg ">
              <img src={slide} className="img-fluid" alt="slider-img" />
              <h2 className="centered">67%</h2>
              <p className="pcentered">
                {" "}
                67% of customer churn is preventable if firms resolve issues the
                first time they occur
              </p>
            </div>
            <div className="col-12 ">
              <img src={slide} className="img-fluid" alt="slider-img" />
            </div>
            <div className="col-12 ">
              <img src={slide} className="img-fluid" alt="slider-img" />
            </div>
            <div className="col-12 ">
              <img src={slide} className="img-fluid" alt="slider-img" />
            </div>
            <div className="col-12 ">
              <img src={slide} className="img-fluid" alt="slider-img" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
