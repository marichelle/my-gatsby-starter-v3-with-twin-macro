import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import tw from 'twin.macro'

import { Layout, Metadata } from '@components'

const IndexPage = () => (
  <Layout>
    <Metadata title="Home" />
    <h1 tw="font-bold text-4xl text-gray-800">Hi people</h1>
    <div tw="font-serif my-5 space-y-4 text-gray-700">
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="A Gatsby astronaut"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/" tw="text-blue-600 underline">
          Go to page 2
        </Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
