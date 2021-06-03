import React from 'react'
import 'twin.macro'

export const Footer = () => {
  return (
    <footer tw="font-serif mt-8 text-gray-700">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com" tw="text-blue-600 underline">
        Gatsby
      </a>
    </footer>
  )
}
