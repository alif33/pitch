import React from 'react';

const UpcomingProjects = () => {
    return (
      <div className="upcoming-projects">
        <div className="d-flex justify-content-center aling-items-center">
          <h2 className="main-title">Upcoming projects</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-md-5">
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
            <div className="col-lg-3 col-md-6 mt-md-5">
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
            <div className="col-lg-3 col-md-6 mt-md-5">
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
            <div className="col-lg-3 col-md-6 mt-md-5">
              <div className="up-project">
                <div className="card">
                  <div className="up-p-card-header">
                    <img src="./img/roadstarter.svg" alt="" />
                    <h4> RoadStarter</h4>
                    <p className="count active">
                     soon
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
          </div>
        </div>
      </div>
    );
};

export default UpcomingProjects;