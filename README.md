# The Cut Room — Barbershop Demo Site

A modern, premium barbershop website built in React as a 
freelance demo to showcase frontend development services 
to local barbershop businesses.

## 🚀 Live Demo
[View Live Demo](https://thecutroomdemo.netlify.app/)

## 📸 About
The Cut Room is a fully responsive React barbershop website 
demo built to demonstrate what a modern local business 
website can look like. Designed with a premium black and 
gold aesthetic, the site features smooth hover interactions, 
data-driven components and Booksy booking integration.

This project was built as a teaching exercise and freelance 
portfolio piece — demonstrating React component architecture, 
data driven UI and responsive design for real world client work.

## ✨ Features
- Full screen hero section with barbershop background image
- Services section driven by data file — add a service 
  in one place and it appears automatically
- Photo gallery with 6 barbershop images
- Meet The Barbers section with hover overlay showing 
  name, specialty and Book Me button
- Operation hours section driven by data file
- About section with real barbershop photography
- Mobile responsive with hamburger navigation
- Booksy booking integration
- Premium black and gold color scheme
- Footer with portfolio credit link

## 🛠️ Built With
- React
- Vite
- CSS Variables
- Deployed on Netlify

## ⚙️ React Concepts Used
- Component based architecture
- Data driven UI with services.js, hours.js and barbers.js
- Props for passing data between components
- useState for mobile navigation toggle
- Array mapping with keys for services and hours
- CSS hover effects for barber profile cards
- Conditional rendering
- Responsive design with CSS Grid and Flexbox

## 🏗️ Architecture
src/
components/
Navbar.jsx      ← fixed nav with hamburger menu
Hero.jsx        ← full screen hero with background image
About.jsx       ← two column layout with real photo
Services.jsx    ← data driven service cards
Gallery.jsx     ← 6 photo grid
Hours.jsx       ← operation hours from data file
Barbers.jsx     ← barber profiles with hover effect
Footer.jsx      ← three column footer
data/
services.js     ← service names and prices
hours.js        ← business hours
barbers.js      ← barber names and specialties
assets/
images/         ← all site photography

## 💼 Built For
This demo was built to pitch frontend development services 
to local barbershops in the Gastonia and Charlotte, NC area. 
The structure is designed so a real barbershop owner can 
easily swap in their own:
- Photos and branding
- Barber names and specialties  
- Service menu and pricing
- Booksy profile link
- Business hours and address

## 👤 Author
Robert Davis — Frontend Developer
- Portfolio: [robertdavis-front-end-developer.netlify.app](https://robertdavis-front-end-developer.netlify.app)
- GitHub: [@RobDCode21389](https://github.com/RobDCode21389)
- Contra: [contra.com/robert_davis_cbvzmcu5](https://contra.com/robert_davis_cbvzmcu5)