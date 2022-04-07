import React from "react";
import Slider from "react-slick";

const NewProjects = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: true,
    className: "center",
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="new-project-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-12">
            <div className="new-project-title">
              <img src="./img/frame.svg" alt="" />
              <h2 className="main-title">
                Our new
                <br /> projects
              </h2>
              <img src="./img/frame.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-10 col-md-12">
            <div className="new-project-items all">
              <Slider {...settings}>
                <div>
                  <div className="px-2 mt-md-5">
                    <div className="new-project-item">
                      <div className="card">
                        <img src="./img/roadstarter.svg" alt="" />
                        <h4> RoadStarter</h4>
                        <p>
                          total raise :<span> 200,000$</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div>
                      <div className="new-item-progass">
                        <div
                          className="progass-complate"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-2 mt-md-5">
                    <div className="new-project-item">
                      <div className="card">
                        <img src="./img/roadstarter2.svg" alt="" />
                        <h4> RoadStarter</h4>
                        <p>
                          total raise :<span> 200,000$</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div>
                      <div className="new-item-progass">
                        <div
                          className="progass-complate"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-2 mt-md-5">
                    <div className="new-project-item">
                      <div className="card">
                        <img src="./img/roadstarter.svg" alt="" />
                        <h4> RoadStarter</h4>
                        <p>
                          total raise :<span> 200,000$</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div>
                      <div className="new-item-progass">
                        <div
                          className="progass-complate"
                          style={{ width: "00%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-2 mt-md-5">
                    <div className="new-project-item">
                      <div className="card">
                        <img src="./img/roadstarter2.svg" alt="" />
                        <h4> RoadStarter</h4>
                        <p>
                          total raise :<span> 200,000$</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div>
                      <div className="new-item-progass">
                        <div
                          className="progass-complate"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="new-project-items tablet">
              <div className="row">
                <div className="col-6 mt-5">
                  <div className="new-project-item">
                    <div className="card">
                      <img src="./img/roadstarter.svg" alt="" />
                      <h4> RoadStarter</h4>
                      <p>
                        total raise :<span> 200,000$</span>
                      </p>
                      <p>
                        Max allocation :<span> TBA</span>
                      </p>
                    </div>
                    <div className="new-item-progass">
                      <div
                        className="progass-complate"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-5">
                  <div className="new-project-item">
                    <div className="card">
                      <img src="./img/roadstarter.svg" alt="" />
                      <h4> RoadStarter</h4>
                      <p>
                        total raise :<span> 200,000$</span>
                      </p>
                      <p>
                        Max allocation :<span> TBA</span>
                      </p>
                    </div>
                    <div className="new-item-progass">
                      <div
                        className="progass-complate"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-5">
                  <div className="new-project-item">
                    <div className="card">
                      <img src="./img/roadstarter.svg" alt="" />
                      <h4> RoadStarter</h4>
                      <p>
                        total raise :<span> 200,000$</span>
                      </p>
                      <p>
                        Max allocation :<span> TBA</span>
                      </p>
                    </div>
                    <div className="new-item-progass">
                      <div
                        className="progass-complate"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-5">
                  <div className="new-project-item">
                    <div className="card">
                      <img src="./img/roadstarter.svg" alt="" />
                      <h4> RoadStarter</h4>
                      <p>
                        total raise :<span> 200,000$</span>
                      </p>
                      <p>
                        Max allocation :<span> TBA</span>
                      </p>
                    </div>
                    <div className="new-item-progass">
                      <div
                        className="progass-complate"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-end">
            <button>
              ALL PROJECTS{" "}
              <span>
                <img src="./img/arrow-right.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
