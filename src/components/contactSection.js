import React from "react"
import { Container, Row, Col, Button } from "reactstrap"

import Fade from "react-reveal/Fade"

export default function contactSection(props) {

  return (
    <section
      className="min-vh-100 d-flex align-items-center bg-light text-primary position-relative shadow"
      id="contact"
    >
      <Container className="py-5">
        <Fade up>
          <h2 className="display-3">{props.cms.heading}</h2>
          <p className="lead">{props.cms.lead}</p>
        </Fade>
        <Fade up>
          <Row>
            <Col md={4}>
              <Button
                href={`mailto:${props.cms.email}`}
                color="primary"
                className="shadow-sm p-4 mb-md-0 mb-1"
                block
              >
                <i className="fas fa-envelope cmp_contact-btn pointer"></i>
                <span className="font-weight-bold pointer">Email</span>
              </Button>
            </Col>
            <Col md={4}>
              <Button
                href={`https://wa.me/${props.cms.phone}`}
                color="primary"
                className="shadow-sm p-4 mb-md-0 mb-1"
                block
              >
                <i className="fab fa-whatsapp cmp_contact-btn pointer"></i>
                <span className="font-weight-bold pointer">WhatsApp</span>
              </Button>
            </Col>
            <Col md={4}>
              <Button
                href={`https://wa.me/${props.cms.facebook}`}
                color="primary"
                className="shadow-sm p-4"
                block
              >
                <i className="fab fa-facebook-messenger cmp_contact-btn pointer"></i>
                <span className="font-weight-bold pointer">Messenger</span>
              </Button>
            </Col>
          </Row>
        </Fade>

        <Fade up>
          <div className="bg-secondary text-primary p-4 mt-3 rounded">
            {props.cms.contact_form_intro}
            <hr />
            <form action="/thanks" name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" className="mt-3">
            <input type="hidden" name="bot-field" />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control text-cursor"
                      id="name"
                      placeholder="John Doe"
                      name="name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control text-cursor"
                      id="email"
                      placeholder="johndoe@example.com"
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control text-cursor"
                      id="message"
                      rows="3"
                      name="message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                <span className="font-weight-bold mr-2 pointer">
                  {props.cms.send_button_text}
                </span>
                <i className="far fa-paper-plane pointer"></i>
              </button>
            </form>
          </div>
        </Fade>
        {/* </div> */}
      </Container>
    </section>
  )
}
