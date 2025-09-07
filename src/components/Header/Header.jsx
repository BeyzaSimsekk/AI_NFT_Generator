import React from "react";
import "./Header.css";
import rose from "../../../public/rose.svg";
//import rose from "../../assets/rose.png";

function Header() {
  return (
    <header className="header flexColCenter">
      <img src={rose} alt="AI NFT Generator Logo" className="header-logo" />
      <h1 className="header-title">AI NFT GENERATOR</h1>
    </header>
  );
}

export default Header;
