import React from "react";
import { graphql } from "gatsby";

const PageQuery_4 = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

export const query = graphql`
  query {
    allFile(
      sort: { fields: name }
      filter: { sourceInstanceName: { eq: "assets" } }
    ) {
      nodes {
        id
        dir
        relativePath
      }
    }
  }
`;

export default PageQuery_4;
