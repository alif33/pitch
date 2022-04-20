import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { upcomingProSlider } from "../../config/settings";

const UpcomingProjects = () => {

  return (
    <div className="upcoming-projects">
      <div className="d-flex justify-content-center aling-items-center">
        <h2 className="main-title">Upcoming projects</h2>
      </div>
      <div className="container">
        <div className="new-project-items all">
          <Slider {...upcomingProSlider}>
            <div className="px-2 mt-md-5">
              <div className="up-project">
              <Link to="sale-will-start">
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
                </Link>
              </div>
            </div>
            <div className="px-2 mt-md-5">
              <div className="up-project">
              <Link to="sale-will-start">
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
                </Link>
              </div>
            </div>
            <div className="px-2 mt-md-5">
              <div className="up-project">
              <Link to="sale-will-start">
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
                </Link>
              </div>
            </div>
            <div className="px-2 mt-md-5">
              <div className="up-project">
              <Link to="sale-will-start-soon">
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
                </Link>
              </div>
            </div>
          </Slider>
        </div>
        <div className="new-project-items tablet">
          <div className="row">
            <div className="col-6 mt-5">
              <div className="up-project">
              <Link to="sale-will-start">
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
                </Link>
              </div>
            </div>
            <div className="col-6 mt-5">
              <div className="up-project">
              <Link to="sale-will-start">
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
                </Link>
              </div>
            </div>
            <div className="col-6 mt-5">
              <div className="up-project">
              <Link to="sale-will-start">
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
                </Link>
              </div>
            </div>
            <div className="col-6 mt-5">
              <div className="up-project">
              <Link to="sale-will-start-soon">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
