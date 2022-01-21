import React from "react";
import Notch from "./notch";
import Arrow from "../images/arrow";
import { ButtonStyle } from "./button.module.css";

const Button = ({ showMenu, setShowMenu }) => {
  function handleClick() {
    setShowMenu(true);
  }

  return (
    <div className={ButtonStyle} onClick={handleClick}>
      <Notch>
        <Arrow fill="#ffb038" stroke="#ffb038" />
      </Notch>
    </div>
  );
};

export default Button;
