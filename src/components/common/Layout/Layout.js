import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles } from 'twin.macro'
import { useStaticQuery, graphql } from 'gatsby'

import { Header, Footer } from '@components'

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div tw="my-0 mx-auto pt-0 px-4 pb-6 max-w-4xl">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
