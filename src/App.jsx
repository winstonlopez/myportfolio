import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'
import { useRef, useEffect, useState } from 'react'



function App() {

  const [mode, setMode] =useState('dark')

  const mainRef = useRef()

  useEffect(() => {  //scroll behavior for navbar
    const nav = mainRef.current.querySelector('#nav-container')
    const smallMenu = document.querySelector('.small-nav')
    const menuContainer = document.querySelector('.menu-container')
    

    let prevScrollpos = window.scrollY

    const scrollHandler = () => { 
    
        let currentScrollpos = window.scrollY //when scrolled get current position
        if(currentScrollpos === 0){ //if on top of page, keep navbar
          nav.style.top = '0'
        }else
        if(prevScrollpos > currentScrollpos){ //show navbar when scrolling up
          nav.style.top = '0'
        }else{

          menuContainer.classList.remove('small-nav')
          nav.style.top = '-104px'
          
        }
        prevScrollpos = currentScrollpos
    }

    mainRef.current.addEventListener('wheel', scrollHandler)

    mainRef.current.addEventListener('touchmove', scrollHandler)

  })

  useEffect(() => { //remove the open menu when resizing window
    const menuContainer = document.querySelector('.menu-container')

    window.addEventListener('resize', () => {
      if(window.innerWidth < 640){
        menuContainer.classList.remove('small-nav')
      }
    })
  })

  

  useEffect(() => {
    const main = document.querySelector(".main")
    const nav = document.querySelector(".nav-container")
    const name = document.querySelector(".about > .name-about")
    const about = document.querySelector(".about-description > p:first-child")
    const aboutP = document.querySelector(".about-description > div")
    const pTag = document.querySelector(".about p:last-child")
    const teal = document.querySelector('.about p:first-child')

    const lights = document.querySelectorAll('.light-mode')

    const lightMode = () => {
      main.classList.add('light-mode')
      nav.classList.add('light-mode')
      name.classList.add('light-mode')
      about.classList.add('light-mode')
      aboutP.classList.add('light-mode')
      pTag.classList.add('light-mode')
      teal.classList.add('light-mode2')
    }

    const darkMode = () => {
      if(lights.length > 0){
        lights.forEach(l => l.classList.remove('light-mode'))
      }
    }

    mode === 'dark' ? darkMode() : lightMode()

  }, [mode])

  return (
    <div className='main' ref={mainRef}>
      <Navbar setMode={setMode} mode={mode}/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
