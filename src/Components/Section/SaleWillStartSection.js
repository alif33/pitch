import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { _isWhitelisted } from "../../helpers/HttpService";
import { useSelector } from "react-redux";
import { timeFormatter } from "../../helpers/TimeCounter";
import ProgressBar from "@ramonak/react-progress-bar";

const SaleWillStartSection = () => {
  const [project, setProject] = useState();
  const [timer, setTimer] = useState();
  const { projectId } = useParams();
  const { projects } = useSelector((state) => state);
  const { projectsList } = projects;

  const timeCounter = () => {
    setInterval(async () => {
      const _timer = await timeFormatter(projectsList[projectId].end_time);
      if (_timer) {
        setTimer(_timer);
      }
    }, 1000);
  };

  useEffect(() => {
    setProject(projectsList[projectId]);
    _isWhitelisted(projectId).then((status) => {
      console.log(status);
    });
    timeCounter();
  }, []);

  return (
    <div className="counter-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="counter-section-leftside">
              <img src="/img/chainport.svg" alt="" />
              <h2 className="main-title mt-2 mb-4">Chainport</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-4">
            <div className="counter-card token-purchase">
              <p className="couter-title mb-3">Sale will start in</p>
              <div className="count-items">
                <div className="count-item">
                  <h4>{timer?.days ? timer.days : "0"}</h4>
                  <span>Day</span>
                </div>
                <div className="count-item">
                  <h4>{timer?.hours ? timer.hours : "0"}</h4>
                  <span>Hours</span>
                </div>
                <div className="count-item">
                  <h4>{timer?.minutes ? timer.minutes : "0"}</h4>
                  <span>Minutes</span>
                </div>
                <div className="count-item">
                  <h4>{timer?.seconds ? timer.seconds : "0"}</h4>
                  <span>Seconds</span>
                </div>
              </div>
              <small className="chacker">
                1 USDT = {projectsList[projectId].swap_rate}
                {projectsList[projectId].symbol}
              </small>
              <div className="couter-progass w-75">
                <p className="text-center">Recruitment progress</p>
                <ProgressBar
                  completed={80}
                  className="mt-3"
                  bgColor="#FF2853"
                  labelColor="#fff"
                  height="15px"
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="main-btn2">Join Whitelist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleWillStartSection;
