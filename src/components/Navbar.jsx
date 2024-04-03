import { useRef } from "react"

const Navbar = ({ mode, setMode }) => {

    const modeLogo = mode === 'dark' ? '/logos/bx-sun.svg' : '/logos/moon.svg'
    const modeTooltip = mode === 'dark' ? 'Light Mode' : 'Dark Mode'
    const navRef = useRef()

    const menuHandler = () => {
        navRef.current.classList.toggle('small-nav')
    }

    const showNavBar = () => {
        navRef.current.classList.toggle('small-nav')
    }

    const modeHandler = () => {
        if(mode === 'dark'){
            setMode('light')
        }else{
            setMode('dark')
        }
    }


    return ( 

        <div className="nav-container" id='nav-container'>
            <div className="logo">
                <button onClick={modeHandler}><img src={modeLogo} alt="dark/light" className="color-mode" title={modeTooltip}/></button>
 
            </div>
            <nav className="menu-container" ref={navRef}>
                <a href='#home' className="menu" onClick={showNavBar}><span className="number">01.</span>Home</a>
                <a href="#about-page"><p className="menu" onClick={menuHandler}><span className="number">02.</span>About</p></a>
                <a href="#projects"><p className="menu" onClick={menuHandler}><span className="number">03.</span>Projects</p></a>
                <a><p onClick={menuHandler} className="menu"><span className="number">04.</span>Contact</p></a>
                <div className="backshadow">
                    <div className="resume-download" onClick={menuHandler}>Resume</div>
                </div>
            </nav>
            <img src="/buttons/bx-menu.svg" alt="menu" className="sm:hidden hover:cursor-pointer" onClick={showNavBar}/>
        </div>

     )
}
 
export default Navbar