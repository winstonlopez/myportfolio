const Projects = () => {
    return ( 
        
        <div className="projects" id="projects">

            <h2 className="text-2xl"><span className="number">02.</span>Checkout some of the things I&apos;ve built</h2>
            <div className="project-container">
                <div className="project-banner">
                    <div className="green font-mono">Featured Project</div>
                    <h2 className="babbler">Babbler</h2>
                    <p className="babbler-description">
                        A dynamic blog site that incorporates robust authentication alongside interactive blog functionalities, allowing users to engage through upvoting, downvoting, and sorting capabilities.
                    </p>

                    <div className="tech-used green font-mono">
                        <span>React</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>Tailwind-CSS</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/winstonlopez/babbler" target="#"><img src="/logos/github.svg" alt="github" /></a>
                        <a href="https://babbler.fly.dev" target="#"><img src="/logos/external.svg" alt="external" /></a>
                    </div>

                </div>

                {/* <div className="features">
                    <h2 className="green">Key Features</h2>
                    <div className="feature">
                        <h3>Authentication System</h3>
                        <ul>
                            <li>Implemented secure user authentication using JWT tokens.</li>
                            <li>Implemented Password encryption using bcrypt</li>
                            <li>Users can securely register, log in and manage their accounts</li>
                        </ul>
                    </div>
                    <div className="feature">
                        <h3>Blog Interaction</h3>
                        <ul>
                            <li>Enabled users to interact with blog post through upvoting and downvoting mechanisms.</li>
                            <li>Users can provide feedback and influence the visibility of posts based on community engagement.</li>
                        </ul>
                    </div>
                    <div className="feature">
                        <h3>Sorting Options</h3>
                        <ul>
                            <li>Implemented sorting functionalities to enhance user experience.</li>
                            <li>Users can sort blog posts by latest, and by top-voted - most popular first, to navigate content effectively.</li>
                        </ul>
                    </div>
                </div> */}

                <div className="project-snapshot">
                    <img src="/images/babbler.png" alt="babbler" />
                    <div className="filter"></div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Projects;