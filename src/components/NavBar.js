import React, { useState, useEffect } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import * as Scroll from "react-scroll"

export default function NavBar(props) {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(!isOpen)

  const initialState = {
    addClasses: "bg-transparent",
    scaling: 1,
    logoClass: "h3",
    togglerFontSize: "1.5rem",
    collapseClasses: "",
    navPadding: 2,
  }

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
        togglerFontSize: "1.1rem",
        navPadding: 1,
      })
    }
  }

  const [navBarProps, setNavBarProps] = useState(initialState)

  useEffect(() => {
    window.addEventListener("scroll", checkWindowState)
    window.addEventListener("resize", checkWindowState)
    checkWindowState()

    Scroll.Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments)
    })

    Scroll.Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments)
    })

    Scroll.scrollSpy.update()
  }, [])

  const test = a => {
    console.log(a)
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
          </div>
        </Scroll.Link>
        {/* <a className="navbar-brand text-primary p-0 m-0" href="#home">
          <div className={`${navBarProps.logoClass} cmp_brand p-0 m-0 pointer`}>
            getDaveTuts
          </div>
        </a> */}
        <button
          className="navbar-toggler bg-light border border-primary p-2"
          type="button"
          onClick={props.toggle}
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
          isOpen={props.isOpen}
          navbar
          className={`${navBarProps.collapseClasses} text-center rounded`}
        >
          <Nav className="ml-auto nav-fill w-100" navbar>
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
              >
                The Tuts
              </Scroll.Link>
            </NavItem>
            <NavItem>
              <NavLink
                href="#contact"
                style={{
                  transform: `scale(${navBarProps.scaling})`,
                }}
              >
                Contact
              </NavLink>
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
                <DropdownItem>
                  <a href="#">Facebook</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#">GitHub</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#">Instagram</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
