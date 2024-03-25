import { useRef } from 'react'

const About = () => {

    const photoRef = useRef()
    const backgroundRef = useRef()

    const handleHover = () => {
        photoRef.current.classList.toggle('move-photo')
    }
    const handleLeave = () => {
        photoRef.current.classList.toggle('move-photo')
    }


    return ( 
        <div className="about-page">
            <div className="about-description">
                <p><span>About Me</span>
                    <span className="line"></span>
                </p>
                <div className="whole-description">
                    <div className="text-description">
                        <p>Hello!, my name is Winston and I enjoy creating things for the web.
                            My interest in programming started when I tried to automate some of the processes I do as a quality control in <span className="text-secondary">eagleview</span> - a company that provides data analytics and aerial imagery.
                        </p>
                        <p>
                            Here are the technologies that I have learned while building some of my porjects
                        </p>
                        <div className="languages">
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Node.js</p>
                            <p>TypeScript</p>
                            <p>Express</p>
                            <p>Tailwind CSS</p>
                        </div>
                    </div>

                    <div className="backshadow-image" ref={backgroundRef}>
                        <div className="photo-square" ref={photoRef} onMouseOver={handleHover} onMouseLeave={handleLeave}>
                        {/* <img src="/images/myphoto.jpg" alt="" /> */}
                        </div>
                     </div>
                </div>

            </div>

        </div>
     );
}
 
export default About;