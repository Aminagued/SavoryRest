import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Reservation submitted:", formData);
    alert("Reservation request received! We will confirm shortly.");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Make a Reservation</h2>
          <p>Book your table online and experience exceptional dining</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit Us</h3>
            <div className="info-item">
              <h4>Address</h4>
              <p>
                123 Gourmet Street
                <br />
                Culinary District, CA 90210
              </p>
            </div>
            <div className="info-item">
              <h4>Hours</h4>
              <p>
                Monday - Thursday: 5pm - 10pm
                <br />
                Friday - Saturday: 5pm - 11pm
                <br />
                Sunday: 11am - 9pm
              </p>
            </div>
            <div className="info-item">
              <h4>Contact</h4>
              <p>
                Phone: (555) 123-4567
                <br />
                Email: info@savoryrestaurant.com
              </p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "person" : "people"}
                      </option>
                    ))}
                    <option value="9+">9+ people (large party)</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any dietary restrictions or special occasions?"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Reserve Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
