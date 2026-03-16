import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Replace this with a real form submission (e.g. Formspree, EmailJS)
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="divider" style={{ margin: '0.75rem auto 1rem' }} />
          <p>We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          {/* Info */}
          <div className="contact-info">
            <h2>Visit or Reach Out</h2>
            <div className="divider" style={{ margin: '0.75rem 0 1.5rem' }} />

            <div className="info-block">
              <h4>📍 Address</h4>
              <p>Houston, TX</p>
            </div>

            <div className="info-block">
              <h4>📞 Phone</h4>
              <p><a href="tel:7133399632">(713) 339-9632</a></p>
            </div>

            <div className="info-block">
              <h4>✉️ Email</h4>
              <p><a href="mailto:info@b2bead.com">info@b2bead.com</a></p>
            </div>

            <div className="info-block">
              <h4>🌐 Website</h4>
              <p><a href="https://www.b2bead.com" target="_blank" rel="noreferrer">www.b2bead.com</a></p>
            </div>

            <div className="info-block">
              <h4>🕐 Hours</h4>
              <p>Mon – Fri: 9am – 6pm</p>
              <p>Sat: 10am – 5pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <h2>Send a Message</h2>
            <div className="divider" style={{ margin: '0.75rem 0 1.5rem' }} />

            {sent ? (
              <div className="success-msg">
                <p>✅ Thank you! We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us what you're looking for..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
