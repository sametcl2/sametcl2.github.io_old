import React from "react";
import {
  Container,
  DatePublished,
  BlogTitle,
  BlogDate,
} from "./blog-link.module.css";

const BlogLink = ({ title, datePublished }) => {
  return (
    <div className={Container}>
      <h2 id={BlogTitle}>{title}</h2>
      <p id={BlogDate} className={DatePublished}>
        {datePublished}
      </p>
    </div>
  );
};

export default BlogLink;
