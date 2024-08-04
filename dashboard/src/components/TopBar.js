import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
      <div className="sensex">
          <p className="index">Reviewed</p>
          <p className="index-point">{28}</p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">Pending</p>
          <p className="index-points">{28}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
