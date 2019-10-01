import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section>
        <h3>Form</h3>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input
                type="text"
                name="demo-name"
                id="demo-name"
                value=""
                placeholder="Name"
              />
            </div>
            <div className="col-6 col-12-xsmall">
              <input
                type="email"
                name="demo-email"
                id="demo-email"
                value=""
                placeholder="Email"
              />
            </div>
            <div className="col-12">
              <textarea
                name="demo-message"
                id="demo-message"
                placeholder="Enter your message"
                rows={6}
              ></textarea>
            </div>
            <div className="col-12">
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default ContactPage
