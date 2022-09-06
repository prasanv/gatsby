import React from "react";

/*
  IMPORTANT NOTE: File name `{ContentfulRecipes.slug}` corresponds to the GraphQL `allContentfulRecipes { nodes { slug } }` we are just ignoring the `all` prefix and the `nodes` here
*/

const RecipeTemplate = (props) => {
  console.log(props);
  return <div>{props.params.slug} </div>;
};

export default RecipeTemplate;
