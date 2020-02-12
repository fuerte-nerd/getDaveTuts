import React from "react"

export default function contactSection() {
  return (
    <section class="min-vh-100 d-flex align-items-center bg-light text-primary position-relative shadow" id="contact">
      <div class="container py-5">
        <h2 class="display-3">Contact</h2>
        <p class="lead">
          If you would like to contact me for any reason, you have a few
          options...
        </p>
        <div class="row">
          <div class="col">
            <a
              href="mailto:fuertenerd@gmail.com"
              class="btn btn-primary shadow-sm btn-block p-4"
            >
              <i class="far fa-envelope cmp_contact-btn pointer"></i>
              <span class="font-weight-bold pointer">Email</span>
            </a>
          </div>
          <div class="col">
            <a
              href="https://wa.me/34658858572"
              class="btn btn-primary shadow-sm btn-block p-4"
            >
              <i class="fab fa-whatsapp cmp_contact-btn pointer"></i>
              <span class="font-weight-bold pointer">WhatsApp</span>
            </a>
          </div>
          <div class="col">
            <a
              href="http://m.me/dave.andrews.10004694"
              class="btn btn-primary shadow-sm btn-block p-4"
            >
              <i class="fab fa-facebook-messenger cmp_contact-btn pointer"></i>
              <span class="font-weight-bold pointer">Messenger</span>
            </a>
          </div>
        </div>
        <div class="bg-secondary text-primary p-4 mt-3 rounded">
          <small>
            If you would prefer, you can send me a quick message directly from
            this site by using the form below...
          </small>
          <form action="" class="mt-3">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control text-cursor"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control text-cursor"
                    id="email"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control text-cursor"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <button class="btn btn-primary btn-block">
              <span class="font-weight-bold mr-2 pointer">Send</span>
              <i class="far fa-paper-plane pointer"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
