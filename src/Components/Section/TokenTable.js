import React from "react";

const TokenTable = () => {
  return (
    <div className="token-table">
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Contact address</th>
            <th>Locked Until</th>
            <th>token owns</th>
            <th>claim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                {" "}
                <img src="img/project-icon.svg" alt="" />{" "}
                <span>Token name</span>
              </p>
            </td>
            <td>odelia.bb.ob@gmail.com</td>
            <td>12/02/23</td>
            <td>odelia azoulay</td>
            <td>claim</td>
          </tr>
          <tr>
            <td>
              <p>
                {" "}
                <img src="img/project-icon.svg" alt="" />{" "}
                <span>Token name</span>
              </p>
            </td>
            <td>odelia.bb.ob@gmail.com</td>
            <td>12/02/23</td>
            <td>odelia azoulay</td>
            <td>claim</td>
          </tr>
          <tr>
            <td>
              <p>
                {" "}
                <img src="img/project-icon.svg" alt="" />{" "}
                <span>Token name</span>
              </p>
            </td>
            <td>odelia.bb.ob@gmail.com</td>
            <td>12/02/23</td>
            <td>odelia azoulay</td>
            <td>claim</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TokenTable;
