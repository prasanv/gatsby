import * as React from "react";
import * as containerStyles from "../styles/index.module.css";
import Layout from "../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";

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
      <Layout>
        <p className={containerStyles.paragraphStyles}>
          {data.allContentfulRecipes.nodes.map((item, index) => (
            <li key={index}>
              <Link to={`/example/${item.slug}`}>{item.slug}</Link>
            </li>
          ))}
        </p>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
