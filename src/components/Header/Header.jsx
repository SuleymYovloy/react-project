import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://cdn2.iconfinder.com/data/icons/free-simple-line-mix/48/5-Email-128.png"
        className={s.logo}
      />
    </header>
  );
};

export default Header;
