import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from '../components/navigation'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
            siteMetadata {
              title
            }
        }
      }
    `)
  return (
    <div>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header>{data.site.siteMetadata.title}</header>
        <Navigation></Navigation>
        <main className="main">
            {children}
        </main>
    </div>
  )
}

export default Layout