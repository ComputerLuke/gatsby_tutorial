import * as React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="Blog Posts">
      <ul>
        {
            data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2><Link to={node.frontmatter.filename}>{node.frontmatter.title}</Link></h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                </article>
            ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
            frontmatter {
                title
                date
                filename
            }
            id
            excerpt
            }
        }
    }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage