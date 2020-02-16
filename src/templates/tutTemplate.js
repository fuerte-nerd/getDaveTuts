import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"

import Img from "gatsby-image"

import Layout from "../components/layout"

import { Container, Button } from "reactstrap"

export default function TutTemplate({ data }) {
  const post = data.content.childMarkdownRemark.frontmatter
  const followUp = data.tut_pages.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <Helmet>
    <script
        type="text/javascript"
        src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e4016dcd93e0036"
      ></script>
    </Helmet>
      <Link
        to="/"
        className="btn btn-block bg-light fixed-top animated fadeInDown delay-3s shadow"
      >
        Find more tutorials at <span className="h5 pointer">getDaveTuts</span>
      </Link>
      <section className="min-vh-50 shadow bg-dark animated fadeIn cmp_archive-bg">
        <Img fluid={data.featured_image.childImageSharp.fluid} />
        <Container className="text-secondary p-3 text-center">
          <p className="text-center text-muted pt-2 mb-0">{post.date}</p>
          <h1 className="display-4 text-center">{post.title}</h1>
          <div className="addthis_inline_share_toolbox text-center" />
        </Container>
      </section>
      <section className="min-vh-100 bg-secondary text-primary position-relative">
        <div className="text-center bg-light p-4 rounded">
          <Container className="lead">{post.intro_text}</Container>
        </div>
        <Container className="py-3">
          <div
            className="cmp_tutorial-content"
            dangerouslySetInnerHTML={{
              __html: data.content.childMarkdownRemark.html,
            }}
          />
          <div className="addthis_inline_share_toolbox text-center" />
          <div className="bg-primary text-secondary p-4 rounded mt-4 text-center">
            <h3>{followUp.followup_heading}</h3>
            <p>
            {followUp.followup_text}
            </p>
            <div className="text-center">
              <Button href={data.facebook_link.childMarkdownRemark.frontmatter.facebook} color="light" size="sm" className="d-inline-flex align-items-center">
                <span className="font-weight-bold mr-2">
                {followUp.followup_facebook_button_text}
                </span>
                <i className="fab fa-facebook-square  cmp_facebook-btn pointer" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($post_id: String!, $featured_image: String!) {
    content: file(childMarkdownRemark: { id: { eq: $post_id } }) {
      id
      childMarkdownRemark {
        frontmatter {
          date(formatString: "D MMMM YYYY")
          intro_text
          title
        }
        html
      }
    }
    featured_image: file(relativePath: { eq: $featured_image }) {
      childImageSharp {
        fluid(maxHeight: 715, maxWidth: 2000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tut_pages: file(name: { eq: "tuts_pages" }) {
      childMarkdownRemark {
        frontmatter {
          followup_facebook_button_text
          followup_heading
          followup_text
        }
      }
    }
    facebook_link: file(name: { eq: "social_settings" }) {
      childMarkdownRemark {
        frontmatter {
          facebook
        }
      }
    }
  }
`
