import React from "react";
import { graphql } from "gatsby";

// if you use `data` then gatsby is smart to pass `data` inside component for data manipulation/access
// it will not work if you use `getData`
// try commenting out the `data` to see whats returned by props
export const data = graphql`
  query {
    site {
      siteMetadata {
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
`;

const DataFetching_3 = (props) => {
  if (props.data) return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export default DataFetching_3;
