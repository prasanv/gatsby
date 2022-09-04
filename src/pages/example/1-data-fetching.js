import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const DataFetching_1 = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteInfo: siteMetadata {
          title
          siteUrl
          description
          author
          municipalities: simpleData
          attractions: complexData {
            site
            city
          }
          location {
            province
          }
        }
      }
    }
  `);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default DataFetching_1;
