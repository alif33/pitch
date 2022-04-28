import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const RecentProject = () => {

  const navigate = useNavigate();
  const { projects } = useSelector((state) => state);
  const { projectsList } = projects;


  let finishedProjects = projectsList.filter( el=> 
    el.end_time < +new Date/1000
  );

  return (
    <div className="recent-project">
      <div className="d-flex justify-content-center aling-items-center">
        <h2 className="main-title">Recent projects</h2>
      </div>
      <div className="recent-project-table">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>total raise</th>
              <th>closing date</th>
              <th>current price</th>
              <th>change since coinlist</th>
            </tr>
          </thead>
          <tbody>
          {
            finishedProjects && finishedProjects.slice(0, 4).map((item, index)=>{
              return(
                <tr key={index} onClick={() => navigate(`/closed/${item.project_id}`)}>
                  <td>
                    <div>
                      <img src={item.image} alt="" />
                      <span>{item.project_name}</span>
                    </div>
                  </td>
                  <td>${item.swap_rate* (item.token_amount-item.available_token_amount) }</td>
                  <td>18.03.22</td>
                  <td>$0.42</td>
                  <td>
                    <button className="main-btn">0%</button>
                  </td>
                </tr>
              )
            })
          }



            {/* <tr onClick={() => navigate("/closed/1")}>
              <td>
                <div>
                  <img src="/img/project-icon.svg" alt="" />
                  <span>Cricflix</span>
                </div>
              </td>
              <td>200,000$</td>
              <td>18.03.22</td>
              <td>$0.42</td>
              <td>
                <button className="main-btn dicrease"> -50%</button>
              </td>
            </tr>
            <tr onClick={() => navigate("/closed/1")}>
              <td>
                <div>
                  <img src="/img/project-icon.svg" alt="" />
                  <span>Cricflix</span>
                </div>
              </td>
              <td>200,000$</td>
              <td>18.03.22</td>
              <td>$0.42</td>
              <td>
                <button className="main-btn increase">+350%</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProject;
