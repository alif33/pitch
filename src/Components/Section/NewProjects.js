import React from "react";

const NewProjects = () => {
  return (
    <div className="new-project-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-12">
            <div className="new-project-title">
              <img src="./img/frame.svg" alt="" />
              <h2 className="main-title">Our new projects</h2>
              <img src="./img/frame.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-10 col-md-12">
            <div className="new-project-items">
              <div className="row">
                <div className="col-lg-3 col-md-6 mt-md-5">
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
                <div className="col-lg-3 col-md-6 mt-md-5">
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
                <div className="col-lg-3 col-md-6 mt-md-5">
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
                <div className="col-lg-3 col-md-6 mt-md-5">
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-end">
            <button>ALL PROJECTS <span><img src="./img/arrow-right.svg" alt="" /></span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
