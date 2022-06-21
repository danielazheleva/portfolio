import * as React from 'react'
import Layout from '../../components/layout'
import Card from '../../components/card'
import { graphql } from 'gatsby'
import '../../styles/blog.css';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div className='card-holder'>
        {
          data.allMdx.nodes.map((node, index) => (
            <Card
                key={index}
                title={node.frontmatter.title}
                url={node.slug}
                likes={1}
                order={index + 1}
                image={node.frontmatter.image}
                summary={node.frontmatter.summary}
                publicationdate={node.frontmatter.date}
              />
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title,
          summary,
          image
        }
        id
        body
        slug
      }
    }
  }
`


export default BlogPage