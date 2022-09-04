module.exports = {
  siteMetadata: {
    title: `Prasan gatsby`,
    description: `prasan gatsby playground`,
    author: `prasan`,
    siteUrl: `https://www.yourdomain.com`,
    location: { province: "BC" },
    simpleData: ["vancouver", "burnaby", "port coquitlam"],
    complexData: [
      { site: "stanley park", city: "Vancouver" },
      { site: "suspension bridge", city: "North Vancouver", status: "closed" },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "DLtXjKFVNAnbOSLJ1xWtVMN6U5TVj2a8GqrclCIsy2s",
        spaceId: "c71u9pjf9r7y",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
  ],
};
