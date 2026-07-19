import barbershopBg from "../assets/images/barbershop.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.85)), url(${barbershopBg})`
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">

          <p className="hero-label">Welcome To The Cut Room</p>

          <h1 className="hero-title">
            Precision <span>Style.</span> Confidence.
          </h1>

          <p className="hero-sub">
            Premium grooming services in the heart of Gastonia, NC.
            Walk in or book your chair today.
          </p>

          <div className="hero-btns">
            <a href="https://booksy.com" target="_blank" className="hero-btn-primary">
              Book Your Cut
            </a>
            <a href="#services" className="hero-btn-secondary">
              Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero