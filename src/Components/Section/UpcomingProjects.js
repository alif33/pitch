import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { upcomingProSlider } from "../../config/settings";

const UpcomingProjects = () => {

  const { projects } = useSelector((state) => state);
  const { projectsList } = projects;


  let upcomingProjects = projectsList.filter( el=> 
    el.start_time > +new Date/1000
  );

  return (
    <div className="upcoming-projects">
      <div className="d-flex justify-content-center aling-items-center">
        <h2 className="main-title">Upcoming projects</h2>
      </div>
      <div className="container">
        <div className="new-project-items all">
          <Slider {...upcomingProSlider}>
          {
            upcomingProjects && upcomingProjects.slice(0, 4).map((item, index)=>{
              return(
                <div key={ index } className="px-2 mt-md-5">
                  <div className="up-project">
                  <Link to={`upcoming/${ item.project_id }`}>
                    <div className="card">
                      <div className="up-p-card-header">
                        <img src={item.image} alt="" />
                        <h4> {item.project_name}</h4>
                        <p className="count">
                          In <span>3</span> Days
                        </p>
                      </div>
                      <div className="up-p-card-body">
                        <p>
                          Total Raise :<span> ${item.swap_rate* (item.token_amount-item.available_token_amount)}</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div>
                    </div>
                    </Link>
                  </div>
                </div>
              )
            })
          }
          </Slider>
        </div>
        <div className="new-project-items tablet">
          <div className="row">
          {
            upcomingProjects && upcomingProjects.slice(0, 4).map((item, index)=>{
              return(
                <div key={index} className="col-6 mt-5">
                  <div className="up-project">
                  <Link to={`upcoming/${ item.project_id }`}>
                    <div className="card">
                      <div className="up-p-card-header">
                        <img src={item.image} alt="" />
                        <h4> {item.project_name}</h4>
                        <p className="count">
                          {" "}
                          In <span>3</span> Days
                        </p>
                      </div>
                      <div className="up-p-card-body">
                        <p>
                          Total Raise :<span> ${item.swap_rate* (item.token_amount-item.available_token_amount)}</span>
                        </p>
                        <p>
                          Max allocation :<span> TBA</span>
                        </p>
                      </div>
                    </div>
                    </Link>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
