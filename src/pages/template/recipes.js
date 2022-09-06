import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecipesTemplate = ({ data }) => {
  const recipe = data.allContentfulRecipes.nodes[0];
  const image = getImage(recipe.recipeImage.gatsbyImageData);
  // console.log(recipe);

  return (
    <div>
      <h4>{recipe.title} Recipe</h4>
      <GatsbyImage image={image} alt={recipe.title} />
      <p>{recipe.describe.describe}</p>
    </div>
  );
};

export const query = graphql`
  query ($slug: String) {
    allContentfulRecipes(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        describe {
          describe
        }
        details {
          ingredients
          tools
          instructions {
            Step_1
            Step_2
            Step_3
          }
        }
        recipeImage {
          gatsbyImageData(placeholder: TRACED_SVG, height: 400)
        }
      }
    }
  }
`;

export default RecipesTemplate;
