import React from "react";

const FromPagination = ({ page }) => {
  return (
    <div className="from-pagination">
      <ul>{page && page.map((num) => <li>{num}</li>)}</ul>
    </div>
  );
};

export default FromPagination;
