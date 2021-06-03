import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import 'twin.macro'

export const Header = ({ siteTitle }) => {
  return (
    <header tw="bg-purple-900 mb-6">
      <div tw="my-0 mx-auto max-w-4xl py-6 px-4">
        <h1 tw="m-0 font-bold text-4xl">
          <Link to="/" tw="text-white no-underline">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
