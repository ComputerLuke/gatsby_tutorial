import * as React from 'react'
import Layout from '../components/layout'
import {SEO} from "../components/seo"
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage alt="Favicon to be used for this site" src="../images/world-wide-web.png" />
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Gatsby Tutorial" description="Home page" />
)

export default IndexPage