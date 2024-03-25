import { useRef } from "react"
import { useNavigate, Link } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

    const navRef = useRef()

    const menuHandler = (menu) => {
        navigate(`/${menu}`)
        navRef.current.classList.toggle('small-nav')
    }

    const showNavBar = () => {
        navRef.current.classList.toggle('small-nav')
        console.log(navRef.current.classList)
    }


    return ( 

        <div className="nav-container">
            <Link to='/'><div className="logo">Winston Lopez</div></Link>
            <nav className="menu-container" ref={navRef}>
                <p onClick={() => menuHandler('about')} className="menu">About</p>
                <p onClick={() => menuHandler('projects')} className="menu">Projects</p>
                <p onClick={() => menuHandler('contact')} className="menu">Contact</p>
                <div className="backshadow">
                    <div className="resume-download">Resume</div>
                </div>
            </nav>
            <img src="/buttons/bx-menu.svg" alt="menu" className="sm:hidden hover:cursor-pointer" onClick={showNavBar}/>
        </div>

     )
}
 
export default Navbar