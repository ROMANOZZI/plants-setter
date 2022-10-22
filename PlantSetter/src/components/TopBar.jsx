import React from "react";
import pp from "../assets/pp.png";
import notifications from "../assets/notifications.png";
import log from "../assets/logout.png";

const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="logo-text">PlantSitter</div>
      <div className="side-icons">
        <div className="ppContainer">
          <img src={pp} id="pp" alt=""></img>
        </div>
        <div className="topContainer">
          <img src={notifications} alt=""></img>
        </div>
        <div className="topContainer">
          <img alt="" src={log}></img>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
