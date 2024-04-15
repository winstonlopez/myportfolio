

const Socials = ({ mode }) => {



    const github = mode === 'dark' ? '/logos/github.svg' : '/logos/github-light.svg'
    const insta = mode === 'dark' ? "/logos/instagram.svg" : "/logos/instagram-light.svg"
    const gmail = mode === 'dark' ? "/logos/gmail.svg" : "/logos/gmail-light.svg"
    const facebook = mode === 'dark' ? "/logos/facebook.svg" : "/logos/facebook-light.svg"
    
    return ( 
        <div className="icons">
            <a href="https://github.com/winstonlopez" target="#"><img src={github} alt="github" /></a>
            <a href="https://www.instagram.com/g3ngiskhan/" target="#"><img src={insta} alt="instagram" /></a>
            <a href="mailto:ev.winston2304@gmail.com" target="#"><img src={gmail} alt="gmail" /></a>
            <a href="https://www.facebook.com/winston.lopez.14/" target="#"><img src={facebook} alt="gmail" /></a>
        </div>
     )
}
 
export default Socials