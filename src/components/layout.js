import React from "react"
import Helmet from "react-helmet"

import "./styles.scss"

import Footer from "./Footer"

export default function Layout(props) {
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
      {props.children}
      <Footer
        showShare={props.showShare}
        metaData={props.showShare ? props.metaData : null}
      />
    </>
  )
}
