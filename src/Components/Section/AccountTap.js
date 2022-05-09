import React, { useState } from "react";
import TokenTable from "./TokenTable";
import WhiteListTable from "./WhiteListTable";

const AccountTap = () => {
  const [token, setToken] = useState(true);
  const [whiteList, setWhiteList] = useState(false);
  return (
    <div className="account-tap">
      <div className="container-fluid">
        <div className="account-tap-heading">
          <h3>Account </h3>
          <div className="tap-show-btn">
            <button
              onClick={() => setToken(true)}
              className={token ? "tokens active" : "tokens"}
            >
              my tokens
            </button>
            <button
              onClick={() => setToken(false)}
              className={!token ? "tokens active" : "tokens"}
            >
              Whitelist
            </button>
          </div>
        </div>
      </div>

      {token ? <TokenTable /> : <WhiteListTable />}
    </div>
  );
};

export default AccountTap;
