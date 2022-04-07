import React from "react";
import Slider from "react-slick";

const UpcomingProjects = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: true,
    className: "center",
    centerPadding: "40px",
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
    <div className="upcoming-projects">
      <div className="d-flex justify-content-center aling-items-center">
        <h2 className="main-title">Upcoming projects</h2>
      </div>
      <div className="container">
        <div className="new-project-items all">
          <Slider {...settings}>
            <div className="px-2 mt-md-5">
              <div className="up-project">
                <div className="card">
                  <div className="up-p-card-header">
                    <img src="./img/roadstarter.svg" alt="" />
                    <h4> RoadStarter</h4>
                    <p className="count">
                      In <span>3</span> Days
                    </p>
                  </div>
                  <div className="up-p-card-body">
                    <p>
                      total raise :<span> 200,000$</span>
                    </p>
                    <p>
                      Max allocation :<span> TBA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 mt-md-5">
              <div className="up-project">
                <div className="card">
                  <div className="up-p-card-header">
                    <img src="./img/roadstarter.svg" alt="" />
                    <h4> RoadStarter</h4>
                    <p className="count">
                      In <span>3</span> Days
                    </p>
                  </div>
                  <div className="up-p-card-body">
                    <p>
                      total raise :<span> 200,000$</span>
                    </p>
                    <p>
                      Max allocation :<span> TBA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 mt-md-5">
              <div className="up-project">
                <div className="card">
                  <div className="up-p-card-header">
                    <img src="./img/roadstarter.svg" alt="" />
                    <h4> RoadStarter</h4>
                    <p className="count">
                      In <span>3</span> Days
                    </p>
                  </div>
                  <div className="up-p-card-body">
                    <p>
                      total raise :<span> 200,000$</span>
                    </p>
                    <p>
                      Max allocation :<span> TBA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 mt-md-5">
              <div className="up-project">
                <div className="card">
                  <div className="up-p-card-header">
                    <img src="./img/roadstarter.svg" alt="" />
                    <h4> RoadStarter</h4>
                    <p className="count active">soon</p>
                  </div>
                  <div className="up-p-card-body">
                    <p>
                      total raise :<span> 200,000$</span>
                    </p>
                    <p>
                      Max allocation :<span> TBA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="new-project-items tablet">
          <div className="row">
            <div className="col-6 mt-5">
              <div className="up-project">
                <div className="card">
                  <div className="up-p-card-header">
                    <img src="./img/roadstarter.svg" alt="" />
                    <h4> RoadStarter</h4>
                    <p className="count">
                      {" "}
                      In <span>3</span> Days
                    </p>
                  </div>
                  <div className="up-p-card-body">
                    <p>
                      total raise :<span> 200,000$</span>
                    </p>
                    <p>
                      Max allocation :<span> TBA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mt-5">
              <div className="up-project">
                <div className="card">
                  <div className="up-p-card-header">
                    <img src="./img/roadstarter.svg" alt="" />
                    <h4> RoadStarter</h4>
                    <p className="count">
                      {" "}
                      In <span>3</span> Days
                    </p>
                  </div>
                  <div className="up-p-card-body">
                    <p>
                      total raise :<span> 200,000$</span>
                    </p>
                    <p>
                      Max allocation :<span> TBA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mt-5">
              <div className="up-project">
                <div className="card">
                  <div className="up-p-card-header">
                    <img src="./img/roadstarter.svg" alt="" />
                    <h4> RoadStarter</h4>
                    <p className="count">
                      {" "}
                      In <span>3</span> Days
                    </p>
                  </div>
                  <div className="up-p-card-body">
                    <p>
                      total raise :<span> 200,000$</span>
                    </p>
                    <p>
                      Max allocation :<span> TBA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mt-5">
              <div className="up-project">
                <div className="card">
                  <div className="up-p-card-header">
                    <img src="./img/roadstarter.svg" alt="" />
                    <h4> RoadStarter</h4>
                    <p className="count active">soon</p>
                  </div>
                  <div className="up-p-card-body">
                    <p>
                      total raise :<span> 200,000$</span>
                    </p>
                    <p>
                      Max allocation :<span> TBA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
