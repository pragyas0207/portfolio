import "../styles/home.css"
import { Link } from "react-router-dom"
import linkedin from"../assets/icons/linkedin-brands-solid-full.svg"
import github from "../assets/icons/github-brands-solid-full.svg"

function Home() {
  return (
    <>
      <div className='homepg'>
        <div className='home-content'>

          <h1>Hi, I'm <span>Pragya</span></h1>
          {/* <p>Frontend Developer crafting clean UIs</p> */}
          <p>Blahhh Blaaahhhh Blaaahhhh Blaaaaahhhhh</p>
          <div className="buttons">
            <Link to="/projects" className="btn2">View Projects</Link>
            <Link to="/contact" className="btn1">Get In Touch</Link>
          </div>
          <div class="socials">
            <a href="https://www.linkedin.com/in/pragya-chowdary-s-6963a8377/" target="_blank">
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a href="https://github.com/pragyas0207" target="_blank">
              <img src={github} alt="GitHub" />
            </a>
          </div>


        </div>
      </div>
    </>
  )

}
export default Home