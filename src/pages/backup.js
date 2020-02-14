import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NavBar from "../components/NavBar"

import Hero from "../components/heroSection"
import Tuts from "../components/tutsSection"
import Contact from "../components/contactSection"

export default function Index() {
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

  return (
    <Layout>
      <SEO title="Home" />
      <NavBar isOpen={isOpen} toggle={toggle} />
      <div onClick={checkNav}>
        <Hero />
        <Tuts />
        <Contact />
      </div>
    </Layout>
  )
}
