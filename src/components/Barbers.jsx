import React from "react"
import { barbersData } from "../data/barbers"

// Images imported here in the component instead of data file
import barberImg1 from '../assets/images/Dwade.jpg'
import barberImg2 from '../assets/images/Marco.png'
import barberImg3 from '../assets/images/Qwonn.png'
import barberImg4 from '../assets/images/Smigg.png'
import barberImg5 from '../assets/images/Q.jpg'
import barberImg6 from '../assets/images/Jackson.jpg'

// Array to match images to barbers by index
const barberImages = [barberImg1, barberImg2, barberImg3, barberImg4, barberImg5, barberImg6]

function Barbers() {
  return (
    <section id="barbers" className="barbers">
      <div className="barbers-container">

        <div className="barbers-header">
          <span className="barbers-label">The Team</span>
          <h2 className="barbers-title">Meet The Barbers</h2>
          <p className="barbers-sub">
            True craftsmen dedicated to keeping you sharp. 
            Choose your barber and secure your chair.
          </p>
        </div>

        <div className="barbers-grid">
          {/* Added index as second parameter to grab matching image */}
          {barbersData.map(function(barber, index) {
            return (
              <div key={barber.id} className="barber-card">

                {/* ✅ Using barberImages[index] instead of barber.image */}
                <img
                  className="barber-img"
                  src={barberImages[index]}
                  alt={barber.name}
                />

                <div className="barber-overlay">
                  <h3 className="barber-name">{barber.name}</h3>
                  <p className="barber-role">{barber.role}</p>
                  <a href={barber.bookingUrl} className="barber-book-btn">
                    Book Me
                  </a>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Barbers