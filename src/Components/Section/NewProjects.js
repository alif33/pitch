import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { newProSlider } from "../../config/settings";

const NewProjects = () => {
  const { projects } = useSelector((state) => state);
  const { projectsList } = projects;

  let newProject = projectsList.filter( el=> 
      el.start_time < +new Date/1000 && el.end_time > +new Date/1000 
    );

  return (
    <div className="new-project-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-12">
            <div className="new-project-title">
              <img src="/img/frame.svg" alt="" />
              <h2 className="main-title">
                Our new
                <br /> projects
              </h2>
              <img src="/img/frame.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-10 col-md-12">
            <div className="new-project-items all">
              <Slider {...newProSlider}>
                {
                  newProject && newProject.slice(0, 4).map((item, index)=>{
                    return(
                      <div key={ index }>
                        <div className="px-2 mt-md-5">
                          <div className="new-project-item">
                            <Link to={`/live/${item.project_id}`}>
                              <div className="card">
                                <img src="/img/roadstarter.svg" alt="" />
                                <h4> RoadStarter</h4>
                                <p>
                                  total raise :<span> 200,000$</span>
                                </p>
                                <p>
                                  Max allocation :<span> TBA</span>
                                </p>
                              </div>
                            </Link>
                            <div className="new-item-progass">
                              <div
                                className="progass-complate"
                                style={{ width: "50%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                {/* <div>
                  <div className="px-2 mt-md-5">
                    <div className="new-project-item">
                      <Link to="chaiport">
                        <div className="card">
                          <img src="/img/roadstarter.svg" alt="" />
                          <h4> RoadStarter</h4>
                          <p>
                            total raise :<span> 200,000$</span>
                          </p>
                          <p>
                            Max allocation :<span> TBA</span>
                          </p>
                        </div>
                      </Link>
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
                    <Link to="chaiport">
                      <div className="card">
                        <img src="/img/roadstarter2.svg" alt="" />
                        <h4> RoadStarter</h4>
                        <p>
                          total raise :<span> 200,000$</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div></Link>
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
                    <Link to="chaiport">
                      <div className="card">
                        <img src="/img/roadstarter.svg" alt="" />
                        <h4> RoadStarter</h4>
                        <p>
                          total raise :<span> 200,000$</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div></Link>
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
                    <Link to="chaiport">
                      <div className="card">
                        <img src="/img/roadstarter2.svg" alt="" />
                        <h4> RoadStarter</h4>
                        <p>
                          total raise :<span> 200,000$</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div>
                      </Link>
                      <div className="new-item-progass">
                        <div
                          className="progass-complate"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </Slider>
            </div>
            <div className="new-project-items tablet">
              <div className="row">
                <div className="col-6 mt-5">
                  <div className="new-project-item">
                    <Link to="/chaiport">
                      <div className="card">
                        <img src="/img/roadstarter.svg" alt="" />
                        <h4> RoadStarter</h4>
                        <p>
                          total raise :<span> 200,000$</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div>
                    </Link>
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
                  <Link to="chaiport">
                    <div className="card">
                      <img src="/img/roadstarter.svg" alt="" />
                      <h4> RoadStarter</h4>
                      <p>
                        total raise :<span> 200,000$</span>
                      </p>
                      <p>
                        Max allocation :<span> TBA</span>
                      </p>
                    </div>
                    </Link>
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
                  <Link to="chaiport">
                    <div className="card">
                      <img src="/img/roadstarter.svg" alt="" />
                      <h4> RoadStarter</h4>
                      <p>
                        total raise :<span> 200,000$</span>
                      </p>
                      <p>
                        Max allocation :<span> TBA</span>
                      </p>
                    </div>
                    </Link>
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
                  <Link to="chaiport">
                    <div className="card">
                      <img src="/img/roadstarter.svg" alt="" />
                      <h4> RoadStarter</h4>
                      <p>
                        total raise :<span> 200,000$</span>
                      </p>
                      <p>
                        Max allocation :<span> TBA</span>
                      </p>
                    </div>
                    </Link>
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
                <img src="/img/arrow-right.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
