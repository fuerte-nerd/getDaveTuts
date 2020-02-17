import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Helmet from "react-helmet"

import Img from "gatsby-image"

import Layout from "../components/layout"
import Share from "../components/Share"

import Comments from "../components/Comments"

import Disqus from "disqus-react"

import { Container, Button } from "reactstrap"

export default function TutTemplate({ data }) {
  const [showComments, setShowComments] = useState(false)
  const post = data.content.childMarkdownRemark.frontmatter
  const followUp = data.tut_pages.childMarkdownRemark.frontmatter

  const shareConfig = {
    url:
      data.metadata.siteMetadata.url +
      data.content.childMarkdownRemark.fields.slug,
    title: `${data.metadata.siteMetadata.title} - ${data.content.childMarkdownRemark.frontmatter.title}`,
  }

  const disqusShortname = "getdavetuts"
  const disqusConfig = {
    url: shareConfig.url.substring(0, shareConfig.url.length - 1),
    identifier: data.content.id,
    title: post.title,
  }

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <Layout>
      <Helmet>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.intro_text} />
        <meta
          property="og:image"
          content={
            data.metadata.siteMetadata.url +
            data.og_image.childImageSharp.resize.src
          }
        />
        <meta
          property="og:url"
          content={
            data.metadata.siteMetadata.url +
            data.content.childMarkdownRemark.fields.slug
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:site_name"
          content={data.metadata.siteMetadata.title}
        />
        <meta
          name="twitter:image:alt"
          content="Bite-sized development tutorials!"
        />
      </Helmet>
      <Link
        to="/"
        className="btn btn-block btn-light animated fadeInDown delay-2s fixed-top shadow rounded-0"
      >
        Find more tutorials at <span className="h5 pointer">getDaveTuts</span>
      </Link>
      <section className="min-vh-50 shadow bg-dark cmp_archive-bg animated fadeIn">
        <Img fluid={data.featured_image.childImageSharp.fluid} />
        <Container className="text-secondary p-3 text-center">
          <p className="text-center text-muted pt-2 mb-0">{post.date}</p>
          <h1 className="display-4 text-center">{post.title}</h1>
          <Share metaData={shareConfig} />
        </Container>
      </section>
      <section className="min-vh-100 bg-secondary text-primary position-relative">
        <div className="text-center bg-light p-4 rounded animated fadeIn delay-1s">
          <Container className="lead">{post.intro_text}</Container>
        </div>
        <Container className="py-3 animated fadeIn delay-2s">
          <div
            className="cmp_tutorial-content"
            dangerouslySetInnerHTML={{
              __html: data.content.childMarkdownRemark.html,
            }}
          />
          <Share metaData={shareConfig} />
          <div className="bg-primary text-secondary p-4 rounded mt-4 text-center">
            <h3>{followUp.followup_heading}</h3>
            <p>{followUp.followup_text}</p>
            <div className="text-center">
              <Button
                href={
                  data.facebook_link.childMarkdownRemark.frontmatter.facebook
                }
                color="light"
                size="sm"
                className="d-inline-flex align-items-center"
              >
                <span className="font-weight-bold mr-2">
                  {followUp.followup_facebook_button_text}
                </span>
                <i className="fab fa-facebook-square  cmp_facebook-btn pointer" />
              </Button>
            </div>
          </div>
          {showComments ? (
            <div className="text-center mt-3">
              <Button color="primary" outline block size="lg" onClick={toggleComments}>Hide Discussion</Button>
              <div className="bg-primary mt-3 py-3 px-4 rounded">
                <span className="">
                  <Comments
                    disqusShortname={disqusShortname}
                    disqusConfig={disqusConfig}
                  />
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center mt-3">
              <Button color="primary" outline block size="lg" onClick={toggleComments}>
                Show Discussion (
                <small>
                  <Disqus.CommentCount
                    shortname={disqusShortname}
                    config={disqusConfig}
                  ></Disqus.CommentCount>
                </small>
                )
              </Button>
            </div>
          )}
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
        fields {
          slug
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
    og_image: file(relativePath: { eq: $featured_image }) {
      childImageSharp {
        resize(height: 630, width: 1200, quality: 80) {
          src
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
    metadata: site {
      siteMetadata {
        title
        url
      }
    }
  }
`
