import React, { useState } from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NavBar from "../components/NavBar"

import Hero from "../components/heroSection"
import Tuts from "../components/tutsSection"
import Contact from "../components/contactSection"

export default function Index({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    if (window.innerWidth < 992) {
      setIsOpen(!isOpen)
    }
  }

  const checkNav = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  const heroData = {
    ...data.hero_content.childMarkdownRemark.frontmatter,
    hero_image: data.hero_image.childImageSharp.fixed,
  }

  const tutsData = {
    ...data.tuts_content.childMarkdownRemark.frontmatter,
    ...data.social_settings.childMarkdownRemark.frontmatter
  }

  const contactData = {
    ...data.contact_content.childMarkdownRemark.frontmatter,
    ...data.contact_settings.childMarkdownRemark.frontmatter,
  }

  const navData = data.social_settings.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <NavBar isOpen={isOpen} toggle={toggle} cms={navData} />
      <div onClick={checkNav}>
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
        fixed(height: 510, width: 510, duotone: { highlight: "#fafafa", shadow: "#08413f" }) {
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
  }
`
