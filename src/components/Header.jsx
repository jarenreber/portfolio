import React from "react";
import header from "../css/header.module.css";

const Header = () => {
  return (
    <header className={header.main}>
      <div></div>
      <div>
        <div className={header.nameBox}>
          <h1>Jaren Reber</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
