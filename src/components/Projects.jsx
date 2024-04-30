const Projects = () => {
    return ( 
        
        <div className="projects" id="projects">
            <div className="project-main-container">
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

                {/* <div className="project-snapshot">
                    <img src="/images/babbler.png" alt="babbler" />
                    <div className="filter"></div>
                </div> */}
            </div>


            <div className="project-container">
                    <div className="project-banner2">
                    <div className="green font-mono">Featured Project</div>
                    <h2 className="babbler">Random Dish</h2>
                    <p className="babbler-description">
                        A fun and engaging platform for exploring random recipes.
                    </p>

                    <div className="tech-used green font-mono">
                        <span>React</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>Tailwind-CSS</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/winstonlopez/shareats" target="#"><img src="/logos/github.svg" alt="github" /></a>
                        <a href="http://randomdish.onrender.com/" target="#"><img src="/logos/external.svg" alt="external" /></a>
                    </div>

                </div>

                {/* <div className="project-snapshot">
                    <img src="/images/babbler.png" alt="babbler" />
                    <div className="filter"></div>
                </div> */}
            </div>        

            </div>
        </div>
     );
}
 
export default Projects;