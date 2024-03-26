import { useRef } from "react"

const Navbar = () => {

 

    const navRef = useRef()

    const menuHandler = () => {
        navRef.current.classList.toggle('small-nav')
    }

    const showNavBar = () => {
        navRef.current.classList.toggle('small-nav')
        console.log(navRef.current.classList)
    }


    return ( 

        <div className="nav-container" id='nav-container'>
            <a href='#home'><div className="logo">Winston Lopez</div></a>
            <nav className="menu-container" ref={navRef}>
                <a href="#about-page"><p className="menu" onClick={menuHandler}>About</p></a>
                <a href="#projects"><p className="menu" onClick={menuHandler}>Projects</p></a>
                <a><p onClick={menuHandler} className="menu">Contact</p></a>
                <div className="backshadow">
                    <div className="resume-download" onClick={menuHandler}>Resume</div>
                </div>
            </nav>
            <img src="/buttons/bx-menu.svg" alt="menu" className="sm:hidden hover:cursor-pointer" onClick={showNavBar}/>
        </div>

     )
}
 
export default Navbar