import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";

/*
  IMPORTANT NOTE: 
  - File name `{ContentfulRecipes.title}` corresponds to the GraphQL `allContentfulRecipes { nodes { title } }` we are just ignoring the `all` prefix t and the `nodes` here
  - Sample title name in contentful `Fish Fry` but gatsby slugify the page url auto magically
  - Since the page is set based on the title the gatsby auto magically detects that if you pass in query variable `($title: String)` 
*/

const RecipeTemplate = ({ data }) => {
  const recipe = data.allContentfulRecipes.nodes[0];
  const image = getImage(recipe.recipeImage.gatsbyImageData);
  console.log(recipe);
  return (
    <Layout>
      <div>
        <h4>{recipe.title} Recipe</h4>
        <GatsbyImage image={image} alt={recipe.title} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($title: String) {
    allContentfulRecipes(filter: { title: { eq: $title } }) {
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

export default RecipeTemplate;
