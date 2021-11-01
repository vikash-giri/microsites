import React, { Component } from "react";


export default class Applicable extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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
      <div className="container py-4 applicable">
        <h2> Applicable industries</h2>

        <header>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div id="inam" class="carousel slide " data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12 col-lg-4">
                            <div
                              class="card"
                              style={{ width: "300px", margin: "auto" }}
                            >
                              <div class="card-body">
                                <h4 class="card-title">
                                  Why you should use skin masks ?
                                </h4>
                                <p class="card-text">
                                  Skin masks help us to make are skin fresh and
                                  also they protect our skin from the harm rays
                                  of sun
                                </p>
                                <button type="button" class="btn btn-warning">
                                  Read More
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-lg-4">
                            <div class="card" style={{ width: "300px" }}>
                              <img src="images/b.jpg" class="card-img-top" />
                              <div class="card-body">
                                <h4 class="card-title">
                                  Why you should use skin masks ?
                                </h4>
                                <p class="card-text">
                                  Skin masks help us to make are skin fresh and
                                  also they protect our skin from the harm rays
                                  of sun
                                </p>
                                <button type="button" class="btn btn-warning">
                                  Read More
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-lg-4">
                            <div class="card" style={{ width: "300px" }}>
                              <img src="images/c.jpg" class="card-img-top" />
                              <div class="card-body">
                                <h4 class="card-title">
                                  Why you should use skin masks ?
                                </h4>
                                <p class="card-text">
                                  Skin masks help us to make are skin fresh and
                                  also they protect our skin from the harm rays
                                  of sun
                                </p>
                                <button type="button" class="btn btn-warning">
                                  Read More
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12 col-lg-4">
                            <div
                              class="card"
                              style={{ width: "300px", margin: "auto" }}
                            >
                              <img src="images/d.jpg" class="card-img-top" />
                              <div class="card-body">
                                <h4 class="card-title">
                                  Why you should use skin masks ?
                                </h4>
                                <p class="card-text">
                                  Skin masks help us to make are skin fresh and
                                  also they protect our skin from the harm rays
                                  of sun
                                </p>
                                <button type="button" class="btn btn-warning">
                                  Read More
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-lg-4">
                            <div class="card" style={{ width: "300px" }}>
                              <img src="images/e.jpg" class="card-img-top" />
                              <div class="card-body">
                                <h4 class="card-title">
                                  Why you should use skin masks ?
                                </h4>
                                <p class="card-text">
                                  Skin masks help us to make are skin fresh and
                                  also they protect our skin from the harm rays
                                  of sun
                                </p>
                                <button type="button" class="btn btn-warning">
                                  Read More
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-lg-4">
                            <div class="card" style={{ width: "300px" }}>
                              <img src="images/f.jpg" class="card-img-top" />
                              <div class="card-body">
                                <h4 class="card-title">
                                  Why you should use skin masks ?
                                </h4>
                                <p class="card-text">
                                  Skin masks help us to make are skin fresh and
                                  also they protect our skin from the harm rays
                                  of sun
                                </p>
                                <button type="button" class="btn btn-warning">
                                  Read More
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#inam"
                    class="carousel-control-prev"
                    data-slide="prev"
                  >
                    <span class="carousel-control-prev-icon">
                    
                    </span>
                  </a>
                  <a
                    href="#inam"
                    class="carousel-control-next"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
