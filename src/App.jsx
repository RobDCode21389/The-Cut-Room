import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Hours from './components/Hours'
import Barbers from './components/Barbers'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Hours />
      <Barbers />
      <Footer />
    </div>
  )
}

export default App