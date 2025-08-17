import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="About Page" description="Details of this website" />
    </>
)

export default AboutPage