import * as React from 'react'
import Layout from '../components/layout'
import {SEO} from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Gatsby Tutorial" description="Home page" />
)

export default IndexPage