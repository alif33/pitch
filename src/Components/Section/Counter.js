import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HandleApprove, _invest } from "../../helpers/HttpService";
import { timeFormatter } from "../../helpers/TimeCounter";
import { persentage } from "../../helpers/Formatter";
import {
  NetworkHandler,
  NetworkDetector,
  _getBalance,
} from "../../helpers/NetworkHandler";

const Counter = () => {
  const [project, setProject] = useState();
  const [reload, setReload] = useState(1);
  const [disable, setDisable] = useState(false);
  const [rangeValue, setRangeValue] = useState(10);
  const [balance, setBalance] = useState({
    status: true,
    amount: 0,
  });
  const { projects } = useSelector((state) => state);
  const { projectsList } = projects;
  const { projectId } = useParams();
  const [progressValue, setProgressValue] = useState(0);
  const [timer, setTimer] = useState();
  const [bnbet, setBnbet] = useState(true);

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
    setProgressValue(
      persentage(
        projectsList[projectId].available_token_amount,
        projectsList[projectId].token_amount
      )
    );
    timeCounter();
    _getBalance().then((balance) => {
      setBalance(balance);
    });
    NetworkDetector().then((res) => {
      setBnbet(res);
    });
  }, [reload]);

  const handleUsdt = (e) => {
    setRangeValue(parseInt(e.target.value) / parseInt(project?.swap_rate));
  };
  const handleInvest = async () => {
    setDisable(true);
    const { status, message } = await NetworkHandler();
    if (status) {
      HandleApprove(
        projectsList[projectId].token_address,
        parseInt(project?.available_token_amount) *
          parseInt(project?.swap_rate),
        window.ethereum.selectedAddress
      ).then((status) => {
        if (status) {
          console.log("calling");
          _invest(
            projectsList[projectId].project_id,
            parseInt(project?.available_token_amount) *
              parseInt(project?.swap_rate),
            window.ethereum.selectedAddress
          ).then((res) => {
            console.log(res);
          });
        }
      });
    } else {
      toast.error(`${message}`);
    }
  };

  return (
    <div className="counter-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="counter-section-leftside">
              <img src="/img/chainport.svg" alt="" />
              <h2 className="main-title">Chainport</h2>
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
          <div className="col-lg-6">
            <div className="counter-card">
              <p className="couter-title mb-3">Sale is now live</p>
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
            </div>

            <div className="couter-progass">
              <p className="text-center">Recruitment progress</p>

              <div className="slider">
                <Slider
                  // min={ 0 }
                  max={100}
                  value={progressValue}
                  // onChange={ e=>handleChange(e) }
                />
                <div className="main-value">
                  {/* <span>
                ${ parseInt(project?.available_token_amount) * parseInt(project?.swap_rate) }
                </span> */}
                </div>
              </div>
            </div>

            <h2 className="mt-3">Token purchase calculator</h2>
            <div className="token-purchase mt-3">
              <div className="row w-100">
                <div className="col-12 col-md-6 order-md-first order-last">
                  <div className="amount-of-tokens">
                    <label htmlFor="">Amount of Tokens</label>
                    <input
                      type="number"
                      value={rangeValue}
                      onChange={(e) => setRangeValue(parseInt(e.target.value))}
                    />
                    <span></span>
                  </div>
                  <div className="amount-of-tokens mt-2 USTD">
                    <label htmlFor="">Amount of USDT</label>
                    <input
                      type="number"
                      value={
                        project?.swap_rate ? project?.swap_rate * rangeValue : 0
                      }
                      onChange={(e) => handleUsdt(e)}
                    />
                    <span></span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="balance">
                    <div className="balance-header">
                      {balance.status && (
                        <p>BALANCE: {(balance.amount / 10) ^ 18}</p>
                      )}
                      <img
                        onClick={() => setReload(reload + 1)}
                        src="/img/loader-icon.svg"
                        alt=""
                        className="reload-img"
                      />

                      <a className="m-auto">
                        1 USDT = {projectsList[projectId].swap_rate}{" "}
                        {projectsList[projectId].symbol}
                      </a>
                      <p>
                        {bnbet ? (
                          <>
                            {" "}
                            NETWOTK: &nbsp;{" "}
                            <img src="/img/balance-icon.svg" alt="" /> BINANCE
                          </>
                        ) : (
                          <del>
                            NETWOTK: &nbsp;{" "}
                            <img src="/img/balance-icon.svg" alt="" /> BINANCE
                          </del>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                disabled={disable}
                onClick={handleInvest}
                className="main-btn mt-4"
              >
                swap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
