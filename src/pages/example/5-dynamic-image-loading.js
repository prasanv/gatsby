import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query {
    allFile(
      sort: { fields: name }
      limit: 4
      filter: { sourceInstanceName: { eq: "images" }, name: { ne: "icon" } }
    ) {
      nodes {
        dir
        relativePath
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
          )
        }
      }
    }
  }
`;

const DynamicImageLoading_5 = ({ data }) => {
  const nodes = data.allFile.nodes;

  // console.log(JSON.stringify(nodes, null, 1));

  return (
    <div>
      <h2>dynamic image loading</h2>
      <div>
        {nodes.map((item, index) => {
          const imagePath = getImage(item.childImageSharp.gatsbyImageData);
          return (
            <span key={index}>
              <GatsbyImage image={imagePath} alt={item.name} />
              <p>{item.name}</p>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicImageLoading_5;
