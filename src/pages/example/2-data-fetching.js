import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GlobalSEO } from "../../components/SEO";

const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
        simpleData
        attractions: complexData {
          site
          city
        }
        place: location {
          province
        }
      }
    }
  }
`;

const DataFetching_2 = () => {
  const {
    site: {
      siteMetadata: {
        place: { province },
      },
    },
  } = useStaticQuery(getData);

  const data = useStaticQuery(getData);

  return (
    <>
      <div>Province : {province}</div>
      <div>
        Attractions :{" "}
        {data.site.siteMetadata.attractions.map((item) => (
          <li key={item.site}>{item.site}</li>
        ))}
      </div>
    </>
  );
};

export default DataFetching_2;

export const Head = () => (
  <>
    <GlobalSEO title="DataFetching_2">
      <meta name="description" content="2 Data Fetching Example" />
    </GlobalSEO>
  </>
);
