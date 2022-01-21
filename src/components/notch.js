import React from "react";
import { Container } from "./notch.module.css";

const Notch = ({ children }) => {
  return <div className={Container}>{children}</div>;
};

export default Notch;
