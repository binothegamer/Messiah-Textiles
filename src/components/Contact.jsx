import React from 'react'
import './Contact.css'

const locations = [
  {
    label: 'Chennai - Iyyappanthangal',
    address:
      '#295/2, P.V. Govindarajan St, Venkateswara Nagar, Srinivasapuram Village, Iyyappanthangal, Chennai - 600122'
  },
  {
    label: 'Tirupur - Poyampalayam East',
    address:
      'SF.No: 214, Avinashiappan Nagar, Poyampalayam East, Tirupur - 641 602'
  }
]

function Contact() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Contact Us</h2>
          <p>Get in touch with us for bulk orders, custom requirements, or any questions</p>
        </div>
      </section>

      <section className="content-section contact-section">
        <div className="container contact-container">

          <div className="contact-header">
            <p>
              We would love to hear from you. Reach out for bulk orders, custom
              requirements, or any questions about our textile collections.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card owner-card">
              <h3>Owner</h3>
              <p className="owner-name">David</p>
              <p><a href="mailto:david@messiahtextiles.in">david@messiahtextiles.in</a></p>
              <p><a href="tel:+919843128881">+91 98431 28881</a></p>
              <p className="card-hint">Available 9 AM – 6 PM IST (Mon–Sat)</p>
            </div>

            <div className="contact-card">
              <h3>Factory Addresses</h3>
              <div className="address-list">
                {locations.map((loc) => (
                  <div key={loc.label} className="address-item">
                    <h4>{loc.label}</h4>
                    <p>{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="map-grid">
            {locations.map((loc) => (
              <div key={loc.label} className="map-card">
                <div className="map-header">
                  <h4>{loc.label}</h4>
                  <p>View on Google Maps</p>
                </div>

                <div className="map-embed">
                  <iframe
                    title={loc.label}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <p className="map-address">{loc.address}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact
