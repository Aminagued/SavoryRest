import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Savory Restaurant</h3>
            <p>
              Experience the art of fine dining with our carefully crafted menu
              and exceptional service.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                FB
              </a>
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="Twitter">
                TW
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Thursday: 5pm - 10pm</p>
            <p>Friday - Saturday: 5pm - 11pm</p>
            <p>Sunday: 11am - 9pm</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>123 Gourmet Street</p>
            <p>Culinary District, CA 90210</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@savoryrestaurant.com</p>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>
              Subscribe to receive updates on special events and menu changes.
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Savory Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
