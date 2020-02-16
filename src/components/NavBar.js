import React, { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import { toggleNavbar } from "../redux/actions"
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import * as Scroll from "react-scroll"

function NavBar(props) {
  const initialState = {
    addClasses: "bg-transparent",
    scaling: 1,
    logoClass: "h3",
    logoSpanClass: "text-light",
    togglerFontSize: "1.5rem",
    collapseClasses: "",
    navPadding: 2,
  }

  const [navBarProps, setNavBarProps] = useState(initialState)

  const [isNavOpen, setIsNavOpen] = useState(false)

  const myNavRef = useRef(isNavOpen)

  useEffect(() => {
    setIsNavOpen(props.isOpen)
    myNavRef.current = props.isOpen
  }, [props.isOpen])

  const checkNav = e => {
    if (e.type === "keyup") {
      if (e.code === "Escape") {
        if (myNavRef.current && window.innerWidth < 992) {
          toggleNav()
          return
        }
      }
    }
  }

  useEffect(() => {
    const checkWindowState = () => {
      let state = Object.assign({}, initialState)

      if (window.innerWidth < 992) {
        state.collapseClasses = "bg-light p-4 mt-2"
      }

      if (window.scrollY === 0) {
        setNavBarProps(state)
      } else {
        setNavBarProps({
          ...state,
          addClasses: "bg-light shadow-sm",
          scaling: 0.9,
          logoClass: "h4",
          logoSpanClass: "text-secondary",
          togglerFontSize: "1.1rem",
          navPadding: 1,
        })
      }
    }

    window.addEventListener("scroll", checkWindowState)
    window.addEventListener("resize", checkWindowState)
    window.addEventListener("keyup", checkNav)
    checkWindowState()

    return () => {
      window.removeEventListener("scroll", checkWindowState)
      window.removeEventListener("resize", checkWindowState)
      window.removeEventListener("keyup", checkNav)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleNav = () => {
    if (window.innerWidth < 992) {
      props.dispatch(toggleNavbar())
    }
  }

  return (
    <div>
      <Navbar
        color="light"
        expand="lg"
        className={`${navBarProps.addClasses} animated fadeInDown delay-1s py-${navBarProps.navPadding} px-4 cmp_navbar`}
        light
        fixed="top"
      >
        <Scroll.Link
          className="navbar-brand text-primary p-0"
          smooth={true}
          spy={true}
          offset={-43}
          duration={400}
          to="home"
        >
          <div className={`${navBarProps.logoClass} cmp_brand p-0 m-0 pointer`}>
            getDaveTuts
            <span className={`${navBarProps.logoSpanClass}`}>()</span>
          </div>
        </Scroll.Link>
        <button
          className="navbar-toggler bg-light border border-primary p-2"
          type="button"
          onClick={toggleNav}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon  pointer"
            style={{
              fontSize: navBarProps.togglerFontSize,
              borderColor: "white",
            }}
          ></span>
        </button>

        <Collapse
          isOpen={isNavOpen}
          navbar
          className={`${navBarProps.collapseClasses} text-center rounded`}
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Scroll.Link
                activeClass="active"
                className="nav-link"
                smooth={true}
                spy={true}
                offset={-43}
                duration={400}
                to="home"
                style={{
                  transform: `scale(${navBarProps.scaling})`,
                }}
                onClick={toggleNav}
              >
                Home
              </Scroll.Link>
            </NavItem>
            <NavItem>
              <Scroll.Link
                activeClass="active"
                className="nav-link"
                smooth={true}
                spy={true}
                offset={-43}
                duration={400}
                to="tuts"
                style={{
                  transform: `scale(${navBarProps.scaling})`,
                }}
                onClick={toggleNav}
              >
                The Tuts
              </Scroll.Link>
            </NavItem>
            <NavItem>
              <Scroll.Link
                activeClass="active"
                className="nav-link"
                smooth={true}
                spy={true}
                offset={-43}
                duration={400}
                to="contact"
                style={{
                  transform: `scale(${navBarProps.scaling})`,
                }}
                onClick={toggleNav}
              >
                Contact
              </Scroll.Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                style={{
                  transform: `scale(${navBarProps.scaling})`,
                }}
              >
                Find me
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  style={{
                    transform: `scale(${navBarProps.scaling})`,
                  }}
                  onClick={toggleNav}
                >
                  <a href={props.cms.facebook}>
                    <i className="fab fa-facebook mr-2 pointer" />
                    Facebook
                  </a>
                </DropdownItem>
                <DropdownItem
                  style={{
                    transform: `scale(${navBarProps.scaling})`,
                  }}
                  onClick={toggleNav}
                >
                  <a href={props.cms.github}>
                    <i className="fab fa-github mr-2 pointer" />
                    GitHub
                  </a>
                </DropdownItem>
                <DropdownItem
                  style={{
                    transform: `scale(${navBarProps.scaling})`,
                  }}
                  onClick={toggleNav}
                >
                  <a href={props.cms.instagram}>
                    <i className="fab fa-instagram mr-2 pointer" />
                    Instagram
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => ({
  isOpen: state.nav.isOpen,
})

export default connect(mapStateToProps)(NavBar)
