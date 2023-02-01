import React from "react";

import nukenzielogo from "../../assets/nukenzielogo.svg";

import "./index.css";

const Header = ({ setmainPage }) => {
  return (
    <div className="container-header">
      <img src={nukenzielogo} alt="logo" />
      <button className="btnStart" onClick={() => setmainPage(true)}>
        Início
      </button>
    </div>
  );
};

export default Header;
