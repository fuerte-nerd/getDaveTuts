import React from "react"

export default function contactSection(props) {
  return (
    <section className="min-vh-100 d-flex align-items-center bg-light text-primary position-relative shadow" id="contact">
      <div className="container py-5">
        <h2 className="display-3">{props.cms.heading}</h2>
        <p className="lead">
          {props.cms.lead}
        </p>
        <div className="row">
          <div className="col">
            <a
              href={`mailto:${props.cms.email}`}
              className="btn btn-primary shadow-sm btn-block p-4"
            >
              <i className="far fa-envelope cmp_contact-btn pointer"></i>
              <span className="font-weight-bold pointer">Email</span>
            </a>
          </div>
          <div className="col">
            <a
              href={`https://wa.me/${props.cms.phone}`}
              className="btn btn-primary shadow-sm btn-block p-4"
            >
              <i className="fab fa-whatsapp cmp_contact-btn pointer"></i>
              <span className="font-weight-bold pointer">WhatsApp</span>
            </a>
          </div>
          <div className="col">
            <a
              href={`http://m.me/${props.cms.facebook}`}
              className="btn btn-primary shadow-sm btn-block p-4"
            >
              <i className="fab fa-facebook-messenger cmp_contact-btn pointer"></i>
              <span className="font-weight-bold pointer">Messenger</span>
            </a>
          </div>
        </div>
        <div className="bg-secondary text-primary p-4 mt-3 rounded">
          <small>
            {props.cms.contact_form_intro}
          </small>
          <form action="" className="mt-3">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control text-cursor"
                    id="name"
                    placeholder="John Doe"
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
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-block">
              <span className="font-weight-bold mr-2 pointer">{props.cms.send_button_text}</span>
              <i className="far fa-paper-plane pointer"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
