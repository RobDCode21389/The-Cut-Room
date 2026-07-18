function Footer() {
  return <footer className="footer">
    <div className="footer-container">

      {/*Top Section */}
      <div className="footer-top">

        {/*Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">The <span>Cut Room</span></h2>
          <p className="footer-tagline">Precision. Style. "Confidence.</p>
          <p className="footer-desc">
            Premium grooming services in the heart of
            Gastonia, NC. Walk ins welcome - appointments recommended.
          </p>
        </div>

        {/*Quick Links */}
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#hours">Hours</a></li>
            <li><a href="#barbers">Meet The Barbers</a></li>
          </ul>
        </div>

        {/*Contact Info */}
        <div className="footer-contact">
          <h4 className="footer-heading">Visit Us</h4>
          <p>123 E Main Ave</p>
          <p>Gastonia, NC 28054</p>
          <br />
          <h4 className="footer-heading">Hours</h4>
          <p>Mon - Fri : 9:00am - 7:00 pm</p>
          <p>Saturday: 9:00am - 4:00pm</p>
          <p>Sunday: Closed</p>
          <br />
          <a href="https://booksy.com" target="_blank" className="footer-book-btn">Book Now</a>
        </div>

      </div>

      {/*Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 The Cut Room. All rights reserved.</p>
        <p className="footer-credit">Designed & Built by
          <a href="https://robertdavis-front-end-developer.netlify.app" target="_blank"> Robert Davis</a>{' '}</p>
      </div>
      
    </div>
  </footer>
}
export default Footer