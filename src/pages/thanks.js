import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Thanks() {
  return (
    <Layout>
      <SEO title="Thanks" />
      <div className="min-vh-100 d-flex justify-content-center align-items-center container">
        <div className="animated bounceInDown text-center">
          <h1 className="border-bottom border-primary pb-2 mb-4">
            getDaveTuts<span className="text-light">()</span>
          </h1>
          <p className="display-3 font-weight-bold">Thanks!</p>
          <p>
            Your message has been successfully sent. I will reply as soon as
            possible.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to the site
          </Link>
        </div>
      </div>
    </Layout>
  )
}
