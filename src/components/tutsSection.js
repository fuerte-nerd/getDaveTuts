import React from "react"
import Fade from "react-reveal"

export default function TutsSection(props) {
  return (
    <section className="min-vh-100 d-flex align-items-center cmp_tuts-bg text-secondary position-relative" id="tuts">
     <div className="container py-5">
            <Fade up>
                <h2 className="display-3 text-center">{props.cms.heading}</h2>
                <p className="lead text-center">{props.cms.lead}</p>
                <div className="input-group input-group-lg mb-3">
                    <input type="text" className="form-control text-cursor" placeholder="Enter your search query here..."
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Search</button>
                    </div>
                </div>
            </Fade>
            <Fade>
                <table className="table-light table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col" className="text-right">Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-primary">
                        <tr className="tut-link" id="1">
                            <td>How to make a blog with comments in Gatsby</td>
                            <td className="text-right">04/02/2020</td>
                        </tr>
                        <tr className="tut-link" id="2">
                            <td>How to set up a quick dev environment with Bootstrap and Animate.css</td>
                            <td className="text-right">02/02/2020</td>
                        </tr>
                        <tr className="tut-link" id="1">
                            <td>How to make a blog with comments in Gatsby</td>
                            <td className="text-right">04/02/2020</td>
                        </tr>
                        <tr className="tut-link" id="2">
                            <td>How to set up a quick dev environment with Bootstrap and Animate.css</td>
                            <td className="text-right">02/02/2020</td>
                        </tr>
                        <tr className="tut-link" id="1">
                            <td>How to make a blog with comments in Gatsby</td>
                            <td className="text-right">04/02/2020</td>
                        </tr>
                        <tr className="tut-link" id="2">
                            <td>How to set up a quick dev environment with Bootstrap and Animate.css</td>
                            <td className="text-right">02/02/2020</td>
                        </tr>
                    </tbody>
                </table>
            </Fade>
           
            <Fade up>
                <h3 className="display-4 text-center">{props.cms.followup_heading}</h3>
                <p className="text-center">{props.cms.followup_text}</p>
                <div className="text-center">
                    <a href={props.cms.facebook} className="btn btn-primary d-inline-flex align-items-center">
                        <span className="font-weight-bold mr-2 pointer">
                            {props.cms.followup_button_text}</span>
                        <i className="fab fa-facebook-square  cmp_facebook-btn pointer"></i>
                    </a>
                </div>
            </Fade>
        </div>
    </section>

  )
}
