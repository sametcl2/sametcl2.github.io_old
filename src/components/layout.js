import * as React from "react";
import { Helmet } from "react-helmet";
import Social from "./social";
import Navigation from "./navigation";
import { container, siteTitle } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Samet Şahin Blog</title>
      </Helmet>
      <div className={container}>
        <header className={siteTitle}>
          <Social />
        </header>
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
