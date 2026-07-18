import React from "react"
import { operatingHours } from "../data/hours"

function Hours() {
  return <section id="hours" className="hours">
    <div className="hours-container">
      <div className="hours-header">
        <span className="hours-label">Schedule</span>
        <h2 className="hours-title">Operation Hours</h2>
        <p className="hours-sub">Plan your visit. Walk in are welcome, but appointments are highly recommended.</p>
      </div>

      <div className="hours-list">
        {operatingHours.map(function(item, index) {
          return (
            <div key={index}
            className={`hours-row ${item.isClosed ? 'closed' : ''}`}
            >
              <span className="hours-day">{item.day}</span>
              <span className="hours-time">{item.hours}</span>
              </div>
          );
        })}
      </div>

    </div>
  </section>
}
export default Hours