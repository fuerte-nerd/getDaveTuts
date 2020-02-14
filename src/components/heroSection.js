import React, {useEffect} from "react"
import * as Scroll from "react-scroll"
import Img from "gatsby-image"
import { Container } from "reactstrap"

export default function HeroSection(props) {

  return (
    <section
      className="min-vh-100 p-5 d-flex align-items-center justify-content-center shadow"
      id="home"
    >
      <div>
        <Container className="hero-content animated bounceInDown text-primary">
          <Img fixed={props.cms.hero_image} className="rounded-circle cmp_profile-pic" />
          <h1 className="display-3 text-center">getDaveTuts<span className="text-light">()</span></h1>
          <p className="lead text-center">
            {props.cms.lead}
          </p>
          <div className="d-flex align-items-center justify-content-center animated fadeInUp delay-4s">
          <Scroll.Link
            className="btn btn-link text-primary cmp_scroll-down text-center animated flash slower infinite delay-5s d-flex align-items-center font-weight-bold"
            smooth={true}
            offset={-43}
            duration={400}
            spy={true}
            to="tuts"
          >
            {props.cms.button_text}
            <i className="ml-2 fas fa-chevron-down pointer"></i>
          </Scroll.Link>
        </div>
        </Container>
  
        
      </div>
    </section>
  )
}
