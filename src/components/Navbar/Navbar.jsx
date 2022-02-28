import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        {/* <a href="/profile">Profile</a> */}
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        {/* <a href="/dialogs"></a> */}
        <NavLink
          to="/messages"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        {/* <a>News</a> */}
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        {/* <a>Music</a> */}
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        {/* <a>Settings</a> */}
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        {/* <a>Settings</a> */}
        <NavLink
          to="/friends"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Friends
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
