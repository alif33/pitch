import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RecentProject = () => {
  const navigate = useNavigate();
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
                <button className="main-btn">0%</button>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProject;
