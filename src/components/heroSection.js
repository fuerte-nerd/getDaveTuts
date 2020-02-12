import React from "react"
import * as Scroll from "react-scroll"

import { Container, Button } from "reactstrap"

import dave from "../images/dave2.jpg"

export default function HeroSection() {
  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center shadow"
      id="home"
    >
      {/* <div id="home" className="anchor position-absolute"></div> */}
      <Container className="hero-content animated bounceInDown text-primary">
        <img
          src={dave}
          alt="Dave!"
          className="rounded-circle cmp_profile-pic"
        />
        <h1 className="display-3 text-center">getDaveTuts</h1>
        <p className="lead text-center">
          Well hello there! My name's Dave. Whenever I get spare moments, I
          often spend them mincing my mind to bring you (hopefully!)
          easily-digestible development tutorials.
        </p>
      </Container>

      <Scroll.Link
        className="btn btn-sm btn-light position-absolute d-block cmp_scroll-down text-center animated fadeInUp faster delay-3s d-flex align-items-center font-weight-bold"
        smooth={true}
        offset={-43}
        duration={400}
        spy={true}
        to="tuts"
      >
        Scroll Down
        <i className="ml-2 fas fa-chevron-down pointer"></i>
      </Scroll.Link>
    </section>
  )
}
