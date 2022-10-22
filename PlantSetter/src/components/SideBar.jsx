import React from "react";
import Logo from "../assets/corps.png";
import stats from "../assets/stats.png";
import email from "../assets/email.png";
import Roles from "../assets/roles-2.png";
import NavIcon from "./NavIcon";
import corps from "../assets/chip--2.png";
import settings from "../assets/settings.png";
const SideBar = ({ page, setPage }) => {
  const [pages, setPages] = React.useState([
    { name: "stats", icon: stats },
    { name: "email", icon: email },
    { name: "roles", icon: Roles },
    { name: "corps", icon: corps },
  ]);

  return (
    <div className="sideBar">
      <div className="LogoContainer">
        <img className="Logo" src={Logo}></img>
      </div>
      <div className="pagesContainer">
        {pages.map((x) => (
          <NavIcon
            page={page}
            setPage={setPage}
            key={pages.indexOf(x)}
            picture={x.icon}
            Link={"/"}
            name={x.name}
            id={pages.indexOf(x)}
          ></NavIcon>
        ))}
      </div>
      <div className="pageContainer settings">
        <img src={settings} className={`icon`}></img>
      </div>
    </div>
  );
};

export default SideBar;
