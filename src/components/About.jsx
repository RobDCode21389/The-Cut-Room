import barberphoto from "../assets/images/90s.jpg"

function About() {
  return <section id="about" className="about">
    <div className="about-container">

      {/*Left - Image */}
     <div className="about-image">
          <img
            src={barberphoto}
            alt="Barber at work"
            className="about-img"
          />
        </div>

      {/*Right - Content */}
      <div className="about-content">

        <p className="about-label">Our Story</p>
        <h2 className="about-title">More than just a Haircut</h2>
        <p className="about-subtitle">Craft. Culture. Community</p>

        <p className="about-text">
          The Cut Room was born from a single belief - every man
          deserves to look and feel his best. Founded in Gastonia, NC,
          we bring precision cuts, expert fades, and old school babershop
          culture together in one roof. 
        </p>

        <p className="about-text">
          Whether you're coming in for a fresh lineup before a big meeting 
          or a full cut and beard treatment before the weekend - we've got you.
          Every client that sits in our chair gets our full attention and our best work.
          Every time.
        </p>

        {/* Stats */}
        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-number">500</span>
            <span className="about-stat-label">Happy Clients</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">8+</span>
            <span className="about-stat-label">Years Experience</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">5*</span>
            <span className="about-stat-label">Star Rated</span>
          </div>
        </div>

        <a href="#contact" className="about-btn">
          Book your cut
        </a>

      </div>
    </div>
  </section>
}
export default About