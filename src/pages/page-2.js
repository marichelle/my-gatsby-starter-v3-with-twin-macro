import * as React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

import { Layout, Metadata } from '@components'

const SecondPage = () => (
  <Layout>
    <Metadata title="Page Two" />
    <h1 tw="font-bold text-4xl text-gray-800">Hi from the second page</h1>
    <p tw="font-serif my-5 space-y-4 text-gray-700">Welcome to page 2</p>
    <Link to="/" tw="font-serif text-blue-600 underline">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
