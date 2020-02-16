import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal"

import { ListGroup, ListGroupItem } from "reactstrap"

export default function TutsSection(props) {
  const [postsData, setPostsData] = useState()

  useEffect(() => {
    setPostsData(props.cms.posts)
  }, [props.cms.posts])

  const searchPosts = string => {
    const filteredArr = []
    props.cms.posts.map(post => {
      if (
        post.node.childMarkdownRemark.frontmatter.title
          .toLowerCase()
          .includes(string.toLowerCase())
      ) {
        return filteredArr.push(post)
      }

      post.node.childMarkdownRemark.frontmatter.tags.map(tag => {
        if (tag.toLowerCase().includes(string.toLowerCase())) {
          return filteredArr.push(post)
        }
        return null
      })
      return null
    })

    setPostsData(filteredArr)
  }

  const handleChange = e => {
    searchPosts(e.target.value)
  }

  return (
    <section
      className="min-vh-100 d-flex align-items-center cmp_tuts-bg text-secondary position-relative"
      id="tuts"
    >
      <div className="container py-5">
        <Fade up>
          <h2 className="display-3 text-center">{props.cms.heading}</h2>
          <p className="lead text-center">{props.cms.lead}</p>
          <div className="input-group input-group-lg mb-3">
            <input
              type="text"
              className="form-control text-cursor text-center"
              placeholder="Enter your search query here..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleChange}
            />
          </div>
        </Fade>
        <Fade up>
          <ListGroup className="mb-3">
            {postsData ? (
              postsData.length > 0 ? (
                postsData.map((post, i) => {
                  return (
                    <Fade key={i}>
                      <ListGroupItem action>
                        <Link
                          to={post.node.childMarkdownRemark.fields.slug}
                          className="btn btn-block text-left"
                        >
                          <span className="lead">
                            {post.node.childMarkdownRemark.frontmatter.title}
                          </span>
                          <span className="d-block text-right text-muted">
                            <small>
                              {post.node.childMarkdownRemark.frontmatter.date}
                            </small>
                          </span>
                        </Link>
                      </ListGroupItem>
                    </Fade>
                  )
                })
              ) : (
                <Fade>
                  <ListGroupItem className="bg-danger text-light text-center">
                    Sorry, no results matched your query...
                  </ListGroupItem>
                </Fade>
              )
            ) : null}
          </ListGroup>
        </Fade>
        <Fade up>
          <h3 className="display-4 text-center">
            {props.cms.followup_heading}
          </h3>
          <p className="text-center">{props.cms.followup_text}</p>
          <div className="text-center">
            <a
              href={props.cms.facebook}
              className="btn btn-primary d-inline-flex align-items-center"
            >
              <span className="font-weight-bold mr-2 pointer">
                {props.cms.followup_button_text}
              </span>
              <i className="fab fa-facebook-square  cmp_facebook-btn pointer"></i>
            </a>
          </div>
        </Fade>
      </div>
    </section>
  )
}
