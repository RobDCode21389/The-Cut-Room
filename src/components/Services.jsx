import { services } from '../data/Services'

// ServiceCard lives here since it's only used in this file
function ServiceCard({ name, price, description }) {
  return (
    <div className="service-card">
      <div className="service-card-top">
        <h3 className="service-name">{name}</h3>
        <span className="service-price">${price}</span>
      </div>
      <p className="service-description">{description}</p>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">

        {/* Section Header */}
        <div className="services-header">
          <p className="services-label">What We Offer</p>
          <h2 className="services-title">Our Services</h2>
          <p className="services-sub">
            Premium grooming services tailored to every style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              name={service.name}
              price={service.price}
              description={service.description}
            />
          ))}
        </div>

        {/* Book CTA */}
        <div className="services-cta">
           <a href="https://booksy.com" target='_blank' className='services-btn'>Book Your Appointment</a>
        </div>

      </div>
    </section>
  )
}

export default Services