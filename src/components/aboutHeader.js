import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as DesignSystem from "./aboutHeader.module.css";

const AboutHeader = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx {
            nodes {
              id
              body
            }
          }
        }
      `}
      render={(data) => (
        <MDXRenderer
          id={data.allMdx.nodes[0].id}
          components={{
            h1: DesignSystem,
            h2: DesignSystem,
            h3: DesignSystem,
            p: DesignSystem,
            ul: DesignSystem,
            li: DesignSystem,
          }}
        >
          {data.allMdx.nodes[0].body}
        </MDXRenderer>
      )}
    />
  );
};

export default AboutHeader;