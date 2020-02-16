import React from "react"
import Share from "../components/Share"

export default function Footer(props) {
  return (
    <footer className="text-primary text-center p-3">
      {props.showShare ? <Share metaData={props.metaData} /> : null}

      <small>
        all content &copy; 2020{" "}
        <a href="mailto:fuertenerd@gmail.com" className="text-dark">
          fuertenerd
        </a>
      </small>
    </footer>
  )
}
