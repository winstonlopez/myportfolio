import { useRef } from 'react'

const About = () => {

    const photoRef = useRef()
    const backgroundRef = useRef()
    const photoContainer = useRef()



    // const handleHover = () => {
    //     photoRef.current.classList.toggle('move-photo')
    //     backgroundRef.current.classList.toggle('move-frame')
    // }
    // const handleLeave = () => {
    //     photoRef.current.classList.toggle('move-photo')
    //     backgroundRef.current.classList.toggle('move-frame')
    // }


    return ( 
        <div className="about-page" id='about-page'>
            <div className="about-description">
                <p><span><span className='number'>01.</span>About Me</span>
                    <span className="line"></span>
                </p>
                <div className="whole-description">
                    <div className="text-description">
                        <p>Hello!, my name is Winston and I enjoy creating things for the web. After having a degree in electronics and communications engineering, I started working in <span className="text-secondary">eagleview</span> - a company that provides data analytics and aerial imagery,
                            where my interest in programming started when I tried to automate some of the processes I do as a quality control.
                        </p>
                        <p>I realized I could build more fun and useful stuff, and learned Web development technologies on my own, solving problems I encounter along the way.</p>
                        <p>Outside programming, I am a father, enjoying quality time with my kids, biking and running.</p>

                        
                    </div>

                    <div className="photo-container" ref={photoContainer}>
                        <div className="photo-square" ref={photoRef}>
                        {/* <img src="/images/myphoto.jpg" alt="" /> */}
                        </div>
                        <div className="backframe" ref={backgroundRef}></div>
                     </div>
                </div>

            </div>

        </div>
     );
}
 
export default About;