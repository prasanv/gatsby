import * as React from "react";
import * as containerStyles from "../styles/index.module.css";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GlobalSEO } from "../components/SEO";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulRecipes {
        nodes {
          slug
        }
      }
    }
  `);

  return (
    <main className={containerStyles.pageStyles}>
      <div>
        <h4>Data fetching - useStaticQuery Example</h4>
        <Link to="example/1-data-fetching">1-data-fetching</Link>
      </div>
      <div>
        <h4>Data fetching - useStaticQuery Destructuring Example</h4>
        <Link to="example/2-data-fetching">2-data-fetching</Link>
      </div>
      <div>
        <h4>Data fetching - pass `data` as props Example</h4>
        <Link to="example/3-data-fetching">3-data-fetching</Link>
      </div>
      <div>
        <h4>Data fetching - Page Query Example</h4>
        <Link to="example/4-page-query">4-page-query</Link>
      </div>
      <div>
        <h4>Dynamic Image Loading Example</h4>
        <Link to="example/5-dynamic-image-loading">5-dynamic-images</Link>
      </div>
      <div>
        <h4>Contentful data fetching Example</h4>
        <Link to="example/6-contentful-data">6-Contentful-data</Link>
      </div>
      <div>
        <h4>File System Route API Example</h4>
        <p>
          {data.allContentfulRecipes.nodes.map((item, index) => (
            <li key={index}>
              <Link to={`/example/${item.slug}`}>{item.slug}</Link>
            </li>
          ))}
        </p>
      </div>
      <div>
        <h4>Gatsby Node API - createPages</h4>
        <p>
          {data.allContentfulRecipes.nodes.map((item, index) => (
            <li key={index}>
              <Link to={`/template/${item.slug}`}>{item.slug}</Link>
            </li>
          ))}
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <GlobalSEO>
      <meta name="description" content="Index Page with Links" />
    </GlobalSEO>
  </>
);
