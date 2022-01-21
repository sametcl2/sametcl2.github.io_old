import React from "react";
import { Container, DatePublished } from "./blog-link.module.css";

const BlogLink = ({ title, datePublished }) => {
  return (
    <div className={Container}>
      <h2>{title}</h2>
      <p className={DatePublished}>{datePublished}</p>
    </div>
  );
};

export default BlogLink;
