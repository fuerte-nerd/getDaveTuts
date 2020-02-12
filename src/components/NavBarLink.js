import React from "react"
import { NavItem, NavLink } from "reactstrap"
import { Link } from "react-scroll"

export default function NavBarLink(props) {
  return (
    <NavItem>
      <NavLink
        style={{
          transform: `scale(${navBarProps.scaling})`,
        }}
      >
        <Link smooth={true} spy={true} duration={400} activeClass="active" to={props.link}>
            {props.label}
        </Link>
      </NavLink>
    </NavItem>
  )
}
