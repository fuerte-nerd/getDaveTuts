import React from "react"
import { connect } from "react-redux"
import { toggleNavbar } from "../redux/actions"
import { graphql } from "gatsby"

import Helmet from "react-helmet"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import NavBar from "../components/NavBar"

import Hero from "../components/heroSection"
import Tuts from "../components/tutsSection"
import Contact from "../components/contactSection"

function Index(props) {
  const checkNav = e => {
    if (props.navIsOpen && window.innerWidth < 992) {
      props.dispatch(toggleNavbar())
    }
  }

  const heroData = {
    ...props.data.hero_content.childMarkdownRemark.frontmatter,
    hero_image: props.data.hero_image.childImageSharp.fixed,
  }

  const tutsData = {
    ...props.data.tuts_content.childMarkdownRemark.frontmatter,
    ...props.data.social_settings.childMarkdownRemark.frontmatter,
    posts: props.data.tutorial_posts.edges,
  }

  const contactData = {
    ...props.data.contact_content.childMarkdownRemark.frontmatter,
    ...props.data.contact_settings.childMarkdownRemark.frontmatter,
  }

  const navData = props.data.social_settings.childMarkdownRemark.frontmatter

  const metaData = props.data.metadata.siteMetadata

  return (
    <Layout showShare={true} metaData={metaData}>
      {/* <SEO title="Home" /> */}
      <Helmet>
        <meta property="og:title" content={metaData.title} />
        <meta
          property="og:description"
          content={metaData.description}
        />
        <meta
          property="og:image"
          content={`${metaData.url}/assets/site_assets/ogimage.png`}
        />
        <meta
          property="og:url"
          content={metaData.url}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={metaData.title} />
        <meta name="twitter:image:alt" content="Bite-sized development tutorials!" />
      </Helmet>
      <NavBar cms={navData} />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div onClick={checkNav} role="button" tabIndex="0">
        <Hero cms={heroData} />
        <Tuts cms={tutsData} />
        <Contact cms={contactData} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($hero_image: String!) {
    hero_content: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "hero" }
    ) {
      childMarkdownRemark {
        frontmatter {
          button_text
          lead
        }
      }
    }

    hero_image: file(relativePath: { eq: $hero_image }) {
      childImageSharp {
        fixed(
          height: 510
          width: 510
          duotone: { highlight: "#fafafa", shadow: "#08413f" }
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    tuts_content: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "tuts" }
    ) {
      childMarkdownRemark {
        frontmatter {
          lead
          heading
          followup_heading
          followup_button_text
          followup_text
        }
      }
    }

    contact_content: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "contact" }
    ) {
      childMarkdownRemark {
        frontmatter {
          lead
          heading
          contact_form_intro
          send_button_text
        }
      }
    }

    contact_settings: file(name: { eq: "contact_settings" }) {
      childMarkdownRemark {
        frontmatter {
          email
          facebook
          phone
        }
      }
    }

    social_settings: file(name: { eq: "social_settings" }) {
      childMarkdownRemark {
        frontmatter {
          github
          facebook
          instagram
        }
      }
    }
    tutorial_posts: allFile(
      filter: { sourceInstanceName: { eq: "tutorials" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              tags
              date(formatString: "D/M/YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
    metadata: site {
      siteMetadata {
        title
        description
        author
        url
      }
    }
  }
`

const mapStateToProps = state => {
  return {
    navIsOpen: state.nav.isOpen,
  }
}

export default connect(mapStateToProps)(Index)
