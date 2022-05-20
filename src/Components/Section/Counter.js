import toast from "react-hot-toast";
import React, { useEffect, useMemo, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  HandleApprove,
  getBaseCoinAddress,
  _invest,
} from "../../helpers/HttpService";
import { timeFormatter } from "../../helpers/TimeCounter";
import { persentage } from "../../helpers/Formatter";
import {
  NetworkHandler,
  NetworkDetector,
  _getBalance,
  selectedNetwork,
} from "../../helpers/NetworkHandler";
import Web3 from "web3";

const Counter = () => {
  const [swapSuccess, setSwapSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [swap, setSwap] = useState(false);
  const [project, setProject] = useState();
  const [reload, setReload] = useState(1);
  const [disable, setDisable] = useState(false);
  const [rangeValue, setRangeValue] = useState(10);
  const [network, setNetwork] = useState();
  const [balance, setBalance] = useState({
    status: true,
    amount: 0,
  });
  const { projects } = useSelector((state) => state);
  const { projectsList } = projects;
  const { projectId } = useParams();

  const [progressValue, setProgressValue] = useState(0);
  const [timer, setTimer] = useState();
  const [tokenSpan, setTokenSpan] = useState(false);
  const [usdt, setUsdt] = useState(false);

  const usdtAmountToInvest = useMemo(() => {
    return rangeValue / project?.swap_rate;
  }, [project, rangeValue]);

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

    selectedNetwork().then((net) => {
      setNetwork(net);
    });
  }, [reload]);

  const handleUsdt = (e) => {
    setRangeValue(parseInt(e.target.value) / parseInt(project?.swap_rate));
  };

  const handleInvest = async () => {
    setLoading(true);
    setSwap(true);
    setDisable(true);
    const { status, message } = await NetworkHandler();
    if (status) {
      const basecoinAddress = await getBaseCoinAddress();
      //TODO: add a check if already approved
      HandleApprove(
        basecoinAddress,
        usdtAmountToInvest,
        window.ethereum.selectedAddress
      ).then((status) => {
        if (status) {
          return _invest(
            projectsList[projectId].project_id,
            usdtAmountToInvest,
            window.ethereum.selectedAddress
          ).then((res) => {
            console.log(res);
            setLoading(false);
            setSwapSuccess(true);
          });
        }
      });
    } else {
      setLoading(false);
      setSwapSuccess(false);
      toast.error(`${message}`);
    }
  };

  return (
    <div className="counter-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <div className="counter-section-leftside">
              <img src="/img/chainport.svg" alt="" />
              <h2 className="main-title mt-2">Chainport</h2>
              <p className="mt-4">{projectsList[projectId].description}</p>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-2 col-lg-6 offset-lg-1">
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

              <ProgressBar
                completed={80}
                className="mt-3"
                bgColor="#FF2853"
                labelColor="#fff"
                height="15px"
              />
            </div>

            <h2 className="mt-5 mt-md-3 mb-4 pt-3 pt-md-0 token-purchase-title">
              Token purchase calculator
            </h2>
            {swap ? (
              <>
                <div className="swap-section">
                  {loading && (
                    <>
                      <div>
                        <img src="../img/animation2.gif" alt="" />
                        <div className="content-swap">
                          <h4>Swap Processing</h4>
                          <h5>Please wait...</h5>
                        </div>
                      </div>
                    </>
                  )}

                  {swapSuccess && !loading && (
                    <h4>The purchase was made successfully</h4>
                  )}
                  {!swapSuccess && !loading && (
                    <div>
                      <h4>The purchase process failed</h4>
                      <button  onClick={handleInvest} className="mt-4 main-btn2">Try again</button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="token-purchase mt-3">
                <div className="row w-100">
                  <div className="col-12 col-md-6 order-md-first order-last">
                    <div className="amount-of-tokens">
                      <label htmlFor="">Amount of Tokens</label>
                      <input
                        type="number"
                        value={rangeValue}
                        onChange={(e) =>
                          setRangeValue(parseInt(e.target.value))
                        }
                        onFocus={() => setTokenSpan(!tokenSpan)}
                        onBlur={() => setTokenSpan(!tokenSpan)}
                      />
                      {tokenSpan && <span></span>}
                    </div>
                    <div className="amount-of-tokens mt-2 USTD">
                      <label htmlFor="">Amount of USDT</label>
                      <input
                        type="number"
                        value={usdtAmountToInvest}
                        onChange={(e) => handleUsdt(e)}
                        onFocus={() => setUsdt(!usdt)}
                        onBlur={() => setUsdt(!usdt)}
                      />
                      {usdt && <span></span>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="balance">
                      <div className="balance-header">
                        {balance.status && <p>BALANCE: {balance.amount}</p>}
                        <p></p>
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
                        {network?._chain && (
                          <p>
                            {" "}
                            NETWOTK: &nbsp;
                            <img src={network._chain.logo} alt="" /> &nbsp;
                            {network._chain.currency}
                          </p>
                        )}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
