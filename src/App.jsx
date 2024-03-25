import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'



function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/about" element={
            <div>
              <Navbar />
              <About />
            </div>
          } />
          <Route path='/projects' element={
            <div>
              <Navbar />
              <Projects />
            </div>
          } />
          <Route path='/contact' element={
            <div>
              <Navbar />
              <Contact />
            </div>
          }/>
          <Route path="/" element={
            <div>
              <Navbar />
              <Home />
            </div>
          } />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
