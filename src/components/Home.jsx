import { useRef, useEffect } from "react";

const Home = () => {

    const techNameRef = useRef()

    useEffect(() => {

        const spanlist = techNameRef.current.querySelectorAll('span')

        techNameRef.current.addEventListener('mouseover', (event) => {
            if(event.target.tagName === 'DIV' || event.target.tagName === 'P'){
                return
            }else if(event.target.tagName === 'IMG'){
                const span = event.target.nextElementSibling
                //remove all not-hide class
                spanlist.forEach(item => item.classList.remove('not-hide'))
                span.classList.add('not-hide')
            }else {
                spanlist.forEach(item => item.classList.remove('not-hide'))
            }
        })
        })
    

    return ( 
        <div className="tag" id="home">
            <div className="about">
                <p>Hi, my name is</p> 
                <h2 className="name-about">Winston Lopez.</h2>
                <p>I build things for the Web</p>
                <p>I'm a self-taught Junior Full stack web developer creating responsive websites and applications for interesting projects and ideas.</p>
            </div>
            <div className="tech-stack">
                <p>I build Apps and Websites with these technologies</p>
                <div className="languages" ref={techNameRef}>
                                <p><img src="/logos/html-logo.svg" alt="" /><span className="hide">HTML</span></p>
                                <p><img src="/logos/javascript.svg" alt="" /><span className="hide">Javascript</span></p>
                                <p><img src="/logos/bxl-react.svg" alt="react" /><span className="hide">React</span></p>
                                <p><img src="/logos/nodejs.svg" alt="node" /><span className="hide">Node.js</span></p>
                                <p><img src="/logos/mongodb.svg" alt="node" /><span className="hide">MongoDB</span></p>
                                <p><img src="/logos/typescript.svg" alt="typescript" /><span className="hide">TypeScript</span></p>
                                <p><img src="/logos/express.webp" alt="express" /><span className="hide">ExpressJS</span></p>
                                <p><img src="/logos/bxl-tailwind-css.svg" alt="" /><span className="hide">Tailwind-CSS</span></p>
                            </div>
                </div>
            </div>
        
     );
}
 
export default Home;