import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./about-header.module.css";

const AboutHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
          }
          id
          body
        }
      }
    }
  `);

  const content = data.allMdx.nodes.filter(
    (item) => item.frontmatter.title === "Aboutme"
  );
  return <MDXRenderer>{content[0].body}</MDXRenderer>;
};

export default AboutHeader;
