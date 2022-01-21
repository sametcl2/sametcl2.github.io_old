import React from "react";
import { Link } from "gatsby";
import Cross from "../images/cross";
import { MenuStyle, MenuLink, CrossStyle } from "./menu.module.css";

const Menu = ({ showMenu, setShowMenu, handleClick }) => {
  function handleClick() {
    setShowMenu(false);
  }
  return (
    <div className={MenuStyle}>
      <Cross
        className={CrossStyle}
        fill="#ffb038"
        stroke="#ffb038"
        onClick={handleClick}
      />
      <Link className={MenuLink} to="/">
        Hakkımda
      </Link>
      <Link className={MenuLink} to="/blog">
        Blog
      </Link>
    </div>
  );
};

export default Menu;
