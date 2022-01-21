import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "./button";
import Menu from "./Menu";
import { navigationContainer } from "./navigation.module.css";
import "../transitions/animation.css";

const Navigation = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={navigationContainer}>
      {showButton && <Button showMenu={showMenu} setShowMenu={setShowMenu} />}
      <CSSTransition
        in={showMenu}
        timeout={300}
        classNames="animation"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </CSSTransition>
    </div>
  );
};

export default Navigation;
