import React, { Component } from "react";
import Slider from "react-slick";
import slide from "../assets/images/img.png"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  
    };
    return (
      <div className="container-fluid headers">
        <div className="container">
          <h3 className="py-5">Thanking Our Customers For Bringing it Our Notice</h3>
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
              <h2 className="centered">40%</h2>
              <p className="pcentered">
                {" "}
                40% consumers will recommend others not frequent a business if
                they have had poor customer service from them.
              </p>
            </div>
            <div className="col-12 ">
              <img src={slide} className="img-fluid" alt="slider-img" />
              <h2 className="centered">78%</h2>
              <p className="pcentered">
                {" "}
                78% of customers have backed out of a purchase due to a poor
                customer experience.
              </p>
            </div>
            <div className="col-12 ">
              <img src={slide} className="img-fluid" alt="slider-img" />
              <h2 className="centered"> 58%</h2>
              <p className="pcentered">
                {" "}
                58% consumers will switch brands because of poor customer
                service
              </p>
            </div>
            <div className="col-12 ">
              <img src={slide} className="img-fluid" alt="slider-img" />
              <h2 className="centered">90%</h2>
              <p className="pcentered">
                {" "}
                90% of consumers worldwide consider issue resolution as their
                most crucial customer service concern
              </p>
            </div>
            <div className="col-12 ">
              <img src={slide} className="img-fluid" alt="slider-img" />
              <h2 className="centered"> 83%</h2>
              <p className="pcentered">
                {" "}
                83% of customers agree that they feel more loyal to brands that
                respond and resolve their complaints
              </p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
