import React from "react";
import { graphql } from "gatsby";

const ContentfulData_6 = (props) => {
  if (props.data) return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export const query = graphql`
  query {
    allContentfulRecipes {
      nodes {
        id
        title
        describe {
          describe
        }
        details {
          ingredients
          instructions {
            Step_1
            Step_2
            Step_3
          }
          tools
        }
        recipeImage {
          filename
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default ContentfulData_6;
