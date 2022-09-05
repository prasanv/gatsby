import React from "react";

/*
  IMPORTANT NOTE: File name `{ContentfulRecipes.title}` corresponds to the GraphQL `allContentfulRecipes { nodes { title } }` we are just ignoring the `all` prefix t and the `nodes` here
*/

const RecipeTemplate = (props) => {
  console.log(props);
  return <div>{props.params.slug} </div>;
};

export default RecipeTemplate;
