import React from "react";

const FromPagination = ({ page }) => {
  return (
    <div className="from-pagination">
      <ul>{page && page.map((num,i) => <li key={i}>{num}</li>)}</ul>
    </div>
  );
};

export default FromPagination;
