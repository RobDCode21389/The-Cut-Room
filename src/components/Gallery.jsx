// src/components/Gallery.jsx
import React from 'react';
import { galleryImages } from '../data/gallery';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        
        <div className="gallery-header">
          <span className="gallery-label">Our Work</span>
          <h2 className="gallery-title">The Gallery</h2>
          <p className="gallery-sub">A showcase of precision cuts, classic styles, and sharp detail.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div key={item.id} className="gallery-item">
              <img 
                className="gallery-img" 
                src={item.image} 
                alt={item.alt} 
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;