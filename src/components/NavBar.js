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

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const initialState = {
    addClasses: "bg-transparent",
    scaling: 0.9,
    logoClass: "h4",
    togglerFontSize: "1.1rem",
    collapseClasses: "",
  }

  const checkWindowState = () => {
    let state = Object.assign({},initialState)

    if (window.innerWidth < 992) {
      state.collapseClasses = "bg-light p-4 mt-2"
    }

    if (window.scrollY === 0) {
      setNavBarProps(state)
    } else {
      setNavBarProps({
        ...state,
        addClasses: "bg-light shadow-sm",
        scaling: 1,
        logoClass: "h3",
        togglerFontSize: "1.25rem",
      })
    }
  }

  const [navBarProps, setNavBarProps] = useState(initialState)

  useEffect(() => {
    window.addEventListener("scroll", checkWindowState)
    window.addEventListener("resize", checkWindowState)
    checkWindowState()
  }, [])

  return (
    <div>
      <Navbar
        color="light"
        expand="lg"
        className={`${navBarProps.addClasses} animated fadeInDown delay-1s py-3 px-4 cmp_navbar`}
        light
        fixed="top"
      >
        <a className="navbar-brand text-primary p-0 m-0" href="#home">
          <div className={`${navBarProps.logoClass} cmp_brand p-0 m-0 pointer`}>
            getDaveTuts
          </div>
        </a>

        <NavbarToggler
          onClick={toggle}
          style={{
            fontSize: navBarProps.togglerFontSize,
          }}
          className="pointer"
        />
        <Collapse
          isOpen={isOpen}
          navbar
          className={`${navBarProps.collapseClasses} text-center rounded`}
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href="#"
                style={{
                  transform: `scale(${navBarProps.scaling})`,
                }}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#tuts"
                style={{
                  transform: `scale(${navBarProps.scaling})`,
                }}
              >
                The Tuts
              </NavLink>
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
