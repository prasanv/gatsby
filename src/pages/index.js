import * as React from "react";
import * as containerStyles from "../styles/index.module.css";
import Layout from "../components/Layout";

const IndexPage = () => {
  console.log(containerStyles);
  return (
    <main className={containerStyles.pageStyles}>
      <Layout>
        <h1 className={containerStyles.headingStyles}>
          Congratulations
          <br />
          <span className={containerStyles.headingAccentStyles}>
            — you just made a Gatsby site! 🎉🎉🎉
          </span>
        </h1>
        <p className={containerStyles.paragraphStyles}>
          Edit{" "}
          <code className={containerStyles.codeStyles}>src/pages/index.js</code>{" "}
          to see this page update in real-time. 😎
        </p>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
