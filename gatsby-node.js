const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allContentfulRecipes {
        nodes {
          slug
        }
      }
    }
  `);

  data?.allContentfulRecipes.nodes.forEach((item) => {
    createPage({
      // Path for this page — required
      path: `/template/${item.slug}`,
      component: path.resolve(`./src/pages/template/recipes.js`),
      // the context is passed into the component
      context: { slug: item.slug },
    });
  });
};
