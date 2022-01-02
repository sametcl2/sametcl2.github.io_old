import * as React from "react";
import Social from "./social";
import { container, siteTitle } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <header className={siteTitle}>
        <Social />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
