import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'
import { useRef, useEffect } from 'react'



function App() {

  const mainRef = useRef()

  useEffect(() => {
    const nav = mainRef.current.querySelector('#nav-container')

    let prevScrollpos = window.scrollY

    const scrollHandler = () => {
    
        let currentScrollpos = window.scrollY //when scrolled get current position
        if(currentScrollpos === 0){ //if on top of page, keep navbar
          nav.style.top = '0'
        }else
        if(prevScrollpos > currentScrollpos){ //show navbar when scrolling up
          nav.style.top = '0'
        }else{
          nav.style.top = '-104px' //hide navbar when scrolling down
        }
        prevScrollpos = currentScrollpos
      
    }

    mainRef.current.addEventListener('wheel', scrollHandler)

    mainRef.current.addEventListener('touchmove', scrollHandler)


  })

  return (
    <div className='main' ref={mainRef}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
