import React from "react"
import Helmet from "react-helmet"

import "./styles.scss"

import Scripts from "./scripts"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Chewy|Noto+Sans+SC"
        />
        <script
          src="https://kit.fontawesome.com/e6cbd84bc2.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      {children}
      <Scripts />
    </>
  )
}
