import React from "react";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

import Avatar from "../assets/Avatar.svg";
import notifbell from "../assets/bell.svg";
import Mail from "../assets/mailLogo.svg";
import Whitelogo from "../assets/whitelogo.svg";

const Header = () => {
  return (
    <header>
      <div className="header1">
        <NavLink
          to={`/dashboard/miacademia/estudiantes`}
          style={{ textDecoration: "none" }}
        >
          <div className="imgHeader">
            <img src={Whitelogo} alt="UcademyLogo" />
          </div>
        </NavLink>
        <div className="searchDiv">
          <button className="searchIcon">
            <IoMdSearch />
          </button>
          <input className="searchBar" placeholder="Buscar" />
        </div>
      </div>
      <div className="header2">
        <div className="mailBtn">
          <img src={Mail} alt="avatar" />
        </div>
        <div className="notifBtn">
          <img src={notifbell} />
        </div>
        <div className="whitebar">|</div>
        <div>
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
