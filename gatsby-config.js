/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby_tutorial`,
    description: `Tutorial project replication of the Learn How Gatsby Works tutorial`,
    image: `./src/images/world-wide-web.png`,
    siteUrl: `http://localhost:8000/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp"
  ],
}
